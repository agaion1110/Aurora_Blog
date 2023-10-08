---
icon: edit
date: 2023-08-21
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

 # TypeScript封装Axios | 基本封装与拦截器控制

## Axios的基本使用

因axios基础使用十分简单，可参考[axios官方文档](https://www.axios-http.cn/)，这里不在介绍他基本用法，主要讲解拦截器。
拦截器主要分为两种，**请求拦截器**和**响应拦截器**。
**请求拦截器**：请求发送之前进行拦截，应用于我们在请求发送前需要对请求数据做一些处理。例如：

> - 携带token
> - 当请求时间过长时，设置loading

**响应拦截器**：在响应到达时进行拦截，应用于在我们业务代码中拿到数据之前，需要对数据做一定处理。例如：

> - 转换数据格式
> - 移除loading

## 为什么要封装Axios

在项目中会有很多的模块都需要发送网络请求，常见的比如登录模块，首页模块等，如果我们项目中直接使用诸如axios.get(), axios.post()，会存在很多弊端，**哪些弊端呢？**

> 1. 首先这样做会导致我们每个模块对axios依赖性太强，意味着我们项目中的每个模块都和一个第三方库耦合度较高，这样的话，如果axios不在维护，我们要更换库的时候将非常麻烦，我们可以假设一下，随着时间的推移，axios可能因为浏览器的升级，Webpack的改变而出现一些bug， 然而axios已不再维护，这时我们往往需要切换库，这就意味着我们需要去修改每个模块中的请求相关的代码，显而易见，非常繁琐。
> 2. 还有一点，在我们发送网络请求的时候，往往会有很多共同的特性，比如说，在我们成功登录之后的其他请求中，我们往往需要在请求头中添加token，然后发送请求；在每次请求中，我们想展示一个loading… 这些功能如果在每次请求的逻辑中都写一遍，很明显，我们的代码重复度太高了。

而axios封装之后，则会带来很多好处：

> 解决以上弊端，降低与第三方库的耦合度，这样我们将来需要更换库时，只需要修改我们封装后的request即可，这样我们往往只是修改封装后一两个文件，而不再需要每个模块每个模块的修改。

在我们开发中，我认为class的相关语法封装性会更好，因此这里我选择尝试用类相关的概念来封装axios。我想要的封装后达到的效果：可以直接在其他项目使用。

## 利用面向对象的思想对Axios进行封装

### 基础封装

封装一个Request的类，使得在外部可以调用此类的构造函数创建实例，创建的实例就对应axios实例，`http/request.ts`中代码如下：

```typescript
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// 创建这个类的目的：每个创建出的HDRequest的实例都对应一个axios实例
class Request {
  // 创建实例的方法：constructor()构造实例
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  // 二次封装网络请求的方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}
// 暴露Request类
export default Request;

```

基本配置信息单独写在一个文件中，`config/index.ts`中代码如下：

```typescript
const CONFIG = {
    // 服务器地址
    serverAddress: 'https://91huajian.cn',
    // 其他基础配置项，入最长响应时间等
};
export default CONFIG;
```

在`http/index.ts`中创建一个`Request`类的一个实例`http`，并配置这个实例：

```typescript
import Request from "./index";
import CONFIG from "@/config";

// 创建一个axios实例
const http = new Request({
  baseURL: CONFIG.serverAddress,
  timeout: CONFIG.maxTimeout,
})

export default http;
```

在接口中使用该实例发送请求：

```typescript
// 在http/api/sponsor.ts文件中封装发送请求的方法，在页面组件任意位置随意调用
import http from '../request';
// 查询赞助
export const getSponsorListAsync: any = (params: any) => { 
    return http.request({
        url: '/huajian/common/getSponsorList',
        method: 'get',
        params: params
    });
}
```

### 拦截器的类型

拦截器分为三种：

> - 类拦截器（在封装的axios类（文中类为`Request`类）上定义的拦截器）
> - 实例拦截器（在利用`Request`类实例化对象时传递的参数中定义的拦截器）
> - 接口拦截器（在调用实例时传入的参数中定义的参数）

### 配置全局拦截器（类拦截）

保证每一个axios实例对象都有拦截器，即本**使用Request实例化的对象**发送的请求都会被配置的拦截器所拦截并执行拦截器中的程序。

类拦截器比较容易实现，只需要在类中对`axios.create()`创建的实例调用`interceptors`下的两个拦截器即可，实例代码如下：

```typescript
import axios, { AxiosInstance,AxiosRequestConfig,AxiosResponse } from 'axios';
import { RequestConfig } from './types/types';
class Request {
  instance: AxiosInstance;
  constructor(config: RequestConfig) { 
    this.instance = axios.create(config);
    // 添加全局请求拦截器，每个实例都有
    this.instance.interceptors.request.use(
      // 拦截到请求中携带的所有配置项config
      (config: AxiosRequestConfig) => {
        console.log('全局请求拦截器', config);
        return config;
      },
      (err: any) => err
    )
    // 添加全局响应拦截器，每个实例都有
    this.instance.interceptors.response.use(
      // 拦截到服务器返回的响应体res
      (res: AxiosResponse) => {
        console.log('全局响应拦截器', res);
        return res.data;
      },
      (err: any) => err;
  }
  request(config: AxiosRequestConfig) { 
    return this.instance.request(config);
  }
}
export default Request;
```

我们在这里对响应拦截器做了一个简单的处理，就是将请求结果中的`.data`进行返回，因为我们对接口请求的数据主要是存在在`.data`中，跟`data`同级的属性我们基本是不需要的。

### 为某一Request实例单独配置拦截器（实例拦截）

实例拦截器是为了保证封装的灵活性，因为每一个实例中的拦截后处理的操作可能是不一样的，所以在定义实例时，允许我们传入拦截器。

新创建一个实例`http2`在它的`config`中传入拦截器属性，但是`axios`的`AxiosRequestConfig`类型中并没有拦截器属性类型。

因此需要对`types/index.ts`中的构造函数中的`config`类型进行扩展（extends）。首先我们定义一下interface，方便类型提示，代码如下：

```typescript
import { AxiosRequestConfig, AxiosResponse } from "axios";
// 拦截器的类型
export interface RequestInterceptors<T> {
  // 请求拦截器
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;// 在发送请求之前做些什么
  requestInterceptorCatch?: (error: any) => any;// 对请求错误做些什么
  // 响应拦截器
  responseInterceptor?: (res: T) => T;// 对响应数据做点什么
  responseInterceptorsCatch?: (err: any) => any;// 对响应错误做点什么
}
// 自定义传入的参数
export interface RequestConfig<T =  AxiosResponse> extends AxiosRequestConfig{
  interceptors?: RequestInterceptors<T>;
}
```

然后再创建新的实例，并在实例中引入定义的拦截器：

```typescript
import Request from "./index";
import CONFIG from "@/config";
import {RequestConfig} from "./types/types";
import { AxiosResponse } from "axios";

// 创建一个axios实例
const http = new Request({
  baseURL: CONFIG.serverAddress,
  timeout: CONFIG.maxTimeout
})
const http2 = new Request({
  baseURL: CONFIG.serverAddress,
  timeout: CONFIG.maxTimeout,
  interceptors: {
    // 配置请求拦截器
    requestInterceptor: (config: RequestConfig) => { 
      console.log('通过请求拦截器,拿到http2的请求配置参数',config);
      return config;
    },
    // 响应拦截器
    responseInterceptor: (result: AxiosResponse) => {
      console.log('通过响应拦截器,拿到http2的响应返回的结果',result);
      return result;
    }
  }
})

export default {http,http2};
```

**注意：这里的拦截器只能由使用`http2`实例发送的请求才会执行。**

**我们的拦截器的执行顺序为实例请求→类请求→实例响应→类响应；这样我们就可以在实例拦截上做出一些不同的拦截，**

此时在使用`Request`实例化对象`http2`时，我们传入的配置项中多了`interceptors`配置项，那么在`Request`类中我们就得接收并在实例化时执行：
```typescript
import axios, { AxiosInstance,AxiosRequestConfig,AxiosResponse } from 'axios';
import { RequestConfig,RequestInterceptors } from './types/types';
class Request {
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: RequestInterceptors<AxiosResponse>;
  constructor(config: RequestConfig) { 
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;//接收实例对象传入的该实例的定制拦截器
    
    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log('全局请求成功拦截器', config);
        return config;
      },
      (err: any) => err
    )  
    // 使用实例对象的自定义拦截器 针对特定的http2实例添加拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptor, // 请求前的拦截器
      this.interceptorsObj?.requestInterceptorCatch // 发送请求失败的拦截器
    )
    // 使用实例对象的自定义拦截器 针对特定的http2实例添加拦截器
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorsCatch
    );
    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应成功拦截器', res);
        return res.data;
      },
      (err: any) => {
        return err;
      }
    );
  }
  request(config: AxiosRequestConfig) { 
    return this.instance.request(config);
  }
}
export default Request;
```

### 同一个request实例的不同网络请求设置不同的拦截器（接口拦截）

现在我们对**单一接口**进行拦截操作，首先我们将`AxiosRequestConfig`类型修改为`RequestConfig`允许传递拦截器；然后我们在类拦截器中将接口请求的数据进行了返回，也就是说在`request()`方法中得到的类型就不是`AxiosResponse`类型了。

接口中同一个实例在发送不同的`request`请求时一个配置了拦截器一个没配拦截器

```typescript
import { http2 } from "..";

http2.request({
    url: "/entire/list",
    params: {
      offset: 0,
      size: 20,
    },
  })
  .then((res) => {
    console.log(res);
  });

http2.request({
    url: "/home/highscore",
    interceptors: {
      responseInterceptor: (config) => {
        console.log("来自接口定制的请求前的拦截");
        return config;
      },
      responseInterceptor: (res) => {
        console.log("来自接口的响应成功的拦截");
        return res;
      },
    },
  })
  .then((res) => {
    console.log(res);
  });
```

对`request/index.ts`的`request`方法进行进一步封装，使之能够立即执行传进来的拦截器：

```typescript
// Request类的request方法：
// 二次封装网络请求的方法
request<T>(config: RequestConfig<T>): Promise<T> { 
  return new Promise((resolve, reject) => {
    // 为同一个request实例的不同网络请求设置不同的拦截器
    // 不能将拦截器放在实例上，这样的话同一个实例的拦截器都是一样的了
    // 只能判断传进来的config中是否设置了拦截器，若设置了就直接执行
      
    // 执行this.instance.request(config)之前先执行requestInterceptor，并更新config
    if (config.interceptors?.requestInterceptor) {
      //立即调用拦截器函数执行
      config = config.interceptors.requestInterceptor(config);
    }
    // 由于执行完this.instance.request(config)之后才能对response结果进行拦截，是个异步的过程
    // 在Promise内部调用instance实例先执行this.instance.request(config)，然后等待结果，之后以结果作为拦截器函数的参数进行调用
    this.instance
      .request<any, T>(config)
      .then((res) => {
        // 如果给单个响应设置拦截器,这里使用单个响应的拦截器
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res);
        }
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      })
  })
}
```

### 各种请求拦截的执行顺序：

> **拦截器执行顺序：接口请求  ->  实例请求  ->  全局请求  ->  实例响应  ->  全局响应  ->  接口响应**

实例请求和全局请求的先后顺序取决于在`Request`类`constructor()`构造函数中两种请求的执行顺序。

## 取消请求

思路步骤：


1. 创建一个数组用于存储控制器资源；
2. 在请求拦截器中将控制器存入数组；
3. 在响应拦截器中将控制器从数组中移除；
4. 封装一个取消全部请求的方法；
5. 封装一个可以取消指定请求的方法；

### 准备

我们需要将所有请求的取消方法保存到一个集合（这里我用的数组，也可以使用Map）中，然后根据具体需要去调用这个集合中的某个取消请求方法。

因此，我们首先进行类型定义：

```typescript
// 一个取消请求对象，键位url，值为取消控制器
export interface CancelRequestSource { 
  // 取消请求的标识
  [index: string]: AbortController;
}
```

然后我们在Request类中定义储存取消请求对象的数组，和存放请求url的数组

```typescript
/*
存放取消控制对象的集合
* 在创建请求后将取消控制对象 push 到该集合中
* 封装一个方法，可以取消请求，传入 url: string|string[]  
* 在请求之前判断同一URL是否存在，如果存在就取消请求
*/
cancelRequestSourceList ?: CancelRequestSource[];
/*
存放所有请求URL的集合
* 请求之前需要将url push到该集合中
* 请求完毕后将url从集合中删除
* 添加在发送请求之前完成，删除在响应之后删除
*/
requestUrlList ?: string[];
```

接着我们要准备两个方法，一个时根据url在取消控制对象数组中找到对应请求的方法，另一个时完成取消请求后删除存放url数组和存放取下请求对象数组中对象请求的方法。

```typescript
//根据url找到取消请求对象数组中此次请求取消对象存放的地址
private getSourceIndex(url: string): number {
  return this.cancelRequestSourceList?.findIndex((item: CancelRequestSource) => {
    return Object.keys(item)[0] === url;
  }) as number;
}
//请求取消完成后，我们要删除对应请求和取消请求对象
private delUrl(url: string) {
  const urlIndex = this.requestUrlList?.findIndex((u) => u === url);
  const sourceIndex = this.getSourceIndex(url);
  // 删除url和AbortController对象
  urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1);
  sourceIndex !== -1 && this.cancelRequestSourceList?.splice(sourceIndex as number, 1);
}
```

### 在发送请求前存入`AbortController`对象

```typescript
const url = config.url;
// url存在 保存当前请求url 和 取消请求方法
if (url) {
  this.requestUrlList?.push(url);//将url存入url数组
  const controller = new AbortController();//构造实例化一个AbortController对象控制器
  config.signal = controller.signal//绑定请求
  this.cancelRequestSourceList?.push({
    [url]: controller//将该控制器添加入cancelRequestSourceList数组
  })
}
```

### 请求已经完成了删除保存的url和AbortController对象

```typescript
this.instance
    .request<any, T>(config)
    .then(res => {
      // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor<T>(res)
      }
      resolve(res)
    })
    .catch((err: any) => {
      reject(err)
    })
    .finally(() => {
      url && this.delUrl(url);// 请求执行完毕,删除保存在数组中的url和该请求的取消方法
    });
```

### 封装取消请求方法

- 封装取消全部请求

```typescript
// 取消全部请求
cancelAllRequest() {
    this.cancelRequestSourceList?.forEach((source) => {
      const key = Object.keys(source)[0];
      source[key].abort();
    })
}
```

- 封装取消部分请求

```typescript
// 取消请求
cancelRequest(url: string | string[]) {
  if (typeof url === 'string') {
    //  取消单个请求
    const sourceIndex = this.getSourceIndex(url);
    sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url].abort();
  } else {
    // 存在多个需要取消请求的地址
    url.forEach((u) => {
      const sourceIndex = this.getSourceIndex(u);
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u].abort();
    });
  }
}
```

