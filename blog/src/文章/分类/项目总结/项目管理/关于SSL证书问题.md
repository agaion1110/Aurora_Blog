---
icon: edit
date: 2023-08-10
category:
  - git使用技巧
  - 学习笔记
tag:
  - 笔记
star: 3810
sticky: true
copy.disableCopy: true
---

# SSL certificate problem: unable to get local issuer certificate 的一种解决方案

今天遇到这样一个问题，因为平时项目托管到gitee上，所以当今天突然要使用github时，问题就来了，当我们创建完新仓库后，本地项目将要上传到远端仓库。

```shell
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin 仓库url地址
git push origin main
```

然后就报错了：

`fatal: unable to access 'https://github.com/friklogff/Student-registration-management-system.git/': SSL certificate problem: unable to get local issuer certificate`
这里显示我们的SSL证书出现了问题。

这里我们确认一下自己ssh公钥是否有问题，如果实在有问题请参考我的另一篇文章，如何给github和gitee同时添加公钥并同时管理

如果没有问题，我们可以使用一下几种方式继续：

1. 检查本地电脑的系统时间是否正确。如果系统时间偏差太大,会导致 SSL [证书](https://so.csdn.net/so/search?q=证书&spm=1001.2101.3001.7020)无法验证。
2. 尝试更新 Git 的 SSL 证书,运行命令:
  ```shell
   git config --global http.sslVerify "false"
  ```
3. 在控制面板增加 GitHub 的 SSL 证书为受信证书。
4. 使用 SSH 链接而不是 HTTPS 链接来推送。(这种方法很快，推荐🤙)
5. 检查防火墙、代理或网络设置是否在阻塞对 GitHub 的访问。
6. 尝试在其他网络环境推送。





