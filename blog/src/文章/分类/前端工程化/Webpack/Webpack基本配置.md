---
icon: edit
date: 2023-10-26
category:
  - 前端工程化
tag:
  - 笔记
star: false
sticky: false
copy.disableCopy: true
---

# Webpack的基本配置

在使用`Webpack`之前，我们需要对`Webpack`的配置有一定的认识。

## 五大核心概念

1. entry（入口）

   指示Webpack从哪个文件开始打包

2. output（输出）

   指示Webpack打包完的文件输出到哪里，如何命名等

3. loader（加载器）

   webpack本身只能处理js、json等资源，其它资源需要借助loader对css，html等一些资源进行编译加载，Webpack才能解析

4. plugin（插件）

   扩展Webpack的功能

5. mode（模式）

主要有两种模式：

- 开发模式：development
- 生产模式：production