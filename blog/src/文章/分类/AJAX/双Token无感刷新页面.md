---
icon: edit
date: 2023-08-23
category:
  - js
  - 学习笔记
  - 项目总结
tag:
  - 笔记
  - AJAX请求
star: true
sticky: true
copy.disableCopy: true
---

# 双Token | 无感刷新页面

首先引入问题：前端发起网络请求失败，错误码为401。

## 401错误的场景

有如下两种情况会出现401错误：

1. 未登陆用户做一些需要权限才能做的操作，代码会报出401错误。这种情况下，应该让用户回到登陆页。
2. 登录用户的token过期了。

整体目标是：通过axios响应拦截器来处理401问题。
<!-- more -->
### 理解token过期

登陆成功之后，接口会返回一个token值，这个值在后续请求时通过请求头时带上（就像是开门钥匙）。但是，这个值一般会有**有效期**（具体是多长，是由后端决定），假如在我这里有效期是2小时。

如果你上午8点登陆成功，到了10：01分，则token就会失效，再去发请求时，就会报**401**错误。



如果仅仅使用token，那么在token过期后，那么当前操作会失败并退回登陆界面重新登录，这样的操作体验是很让人难以接受的。所以这里我们就推出了双token技术实现无感刷新。

## 双Token实现无感刷新

### 何为双Token

- `access_token`:用户获取数据权限
- `refresh_token`:用来获取新的`access_token`

双 token 验证机制，其中`access_token`过期时间较短，`refresh_token` 过期时间较长。当 `access_token` 过期后，使用 `refresh_token` 去请求新的 token。

### 验证流程

- 对于某次请求A，如果是401错误 （`access_token` 过期）
  - 有`refresh_token`，用`refresh_token`去请求回新的`access_token`
    - 新`access_token` 请求成功 
      - 更新本地`access_token` 
      - 再发一次请求A 
    - 新`access_token` 请求失败
      - 携带请求地址，跳转到登陆页重新登录
  - 没有`refresh_token`，说明没有登陆
    - 携带请求地址，跳转到登陆页重新登录

### 响应拦截器功能

axios中提供了**响应拦截器功能**：所有从后端回来的响应都会集中进入响应拦截器中。所以，我们可以在响应拦截器中去写代码来统一解决。所以双token的验证都是发生在响应拦截器中的。

### 代码

```js
// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么(即响应成功)
    return response
  },
  async function (error: AxiosError<{ message: string }>) {
    // 对响应错误做点什么（相应失败）

    // 1. 处理网络异常状况
    // 如果请求延迟,response为undefined
    if (!error.response) {
      Toast.show('网络异常')
      return Promise.reject(error)
    }
	// 或者其他状态码，视情况处理
    if (error.response.status !== 401) {
      Toast.show('操作异常') 
      return Promise.reject(error)
    }
	// 2. 返回401(token过期)处理
    if (error.response.status === 401) {
      // 2.1 获取refresh_token, 发送请求,获取最新的token
      const { refresh_token } = getToken() // 从本地中获取refresh_token 
      if (refresh_token) {
        try {
          // 发请求重新获取token
          const res = await axios.put(baseURL + 'authorizations', null, {
            headers: {
              Authorization: `Bearer ${refresh_token}`
            }
          })
          // 2.2 保存到redux
          store.dispatch(
            savaToken({ token: res.data.data.token, refresh_token })
          )
          // 2.3 这个时候已经有token了,重新发请求
          return instance(error.config)
        } catch (error) {
          // 如果使用refresh_token获取token的请求都失败了,就直接跳转到login
          history.replace('/login', { from: location.pathname })
          // 清空redux中的所有token
          store.dispatch(savaToken({ token: '', refresh_token: '' }))
          // 将错误抛出
          return Promise.reject(error)
        }
      } else {
        // 2.4 没有refresh_token 跳转到login,并携带当前页面的地址,支持回跳
        history.replace('/login', { from: location.pathname })
      }
      // 2.5 清除 token 和 refresh_token 相关的数据
      store.dispatch(savaToken({ token: '', refresh_token: '' }))
      // 2.6 抛出错误
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)
```

