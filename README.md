# 博客地址 http://118.24.93.28/
## 初始化项目
### 安装vuepress
``` shell
npm init
npm install -D vuepress
```
### 配置基本项
在 package.json 中添加一些 script。
``` json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
\ No newline at end of file
```
### 安装主题
``` shell
npm init vuepress-theme-hope add [dir]
```
### 文件结构
``` text
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json

```