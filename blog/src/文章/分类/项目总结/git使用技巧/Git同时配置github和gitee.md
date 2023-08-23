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

# Git同时配置github和gitee

## 配置Git用户名和邮箱

如果已经设置过可以跳过

```shell
git config --global user.name 用户名
git config --global user.email 邮箱
```

## 生成SSH keys

许多Git托管网站（如[Gitee](https://so.csdn.net/so/search?q=Gitee&spm=1001.2101.3001.7020)和GitHub）都使用SSH协议进行认证，因此为了向Gitee和GitHub提供SSH公钥，必须事先为其生成一份SSH密钥对。这个过程在所有操作系统上都是相似的：

1. 进入存放密钥对的文件夹，SSH密钥对存放在 `~/.ssh` 目录下。在Windows系统下，安装键盘的 `Windows` 键和 `R` 键输入 `.ssh` 回车即可打开

   ![](https://img-blog.csdnimg.cn/87eb23506a604c34bdeac63afb2d5994.jpeg)

2. 生成SSH key:

   在`~/.ssh` 目录下进入Git Bash，输入下列命令然后一直回车即可：

   ```shell
   ssh-keygen -t rsa -f id_rsa.gitee -C "gitee"
   ssh-keygen -t rsa -f id_rsa.github -C "github"
   ```

   参数含义：

   - -t：指定密钥类型，默认是 rsa ，可以省略
   - rsa：指使用RSA算法
   - -f：指定存储密钥的文件名
   - -C：设置注释文字

   若生成成功，则出现:

   ![](https://img-blog.csdnimg.cn/5837f02632d24c3b83e5808863094dd2.jpeg)

   同时，在刚才的 `.ssh` 文件夹下，将会生成4个新文件：

   ![](https://img-blog.csdnimg.cn/0c81c1dc36734ad2aee44eaef4df8647.jpeg)

   其中：

   - id_rsa.xx：私钥
   - id_rsa_xx.xx.pub：私钥对应的公钥

## 添加私钥到ssh-agent中

Git默认读取的文件文件名为id_rsa，因此我们需要将生成的密钥添加到ssh-agent中。在刚才打开的Git Bash窗口中输入：

```shell
ssh-agent bash
ssh-add ~/.ssh/id_rsa.gitee
ssh-add ~/.ssh/id_rsa.github
```

## 修改配置文件

在 `~/.ssh` 目录下打开 `config` 文件，若没有则新建一个名为 `config` 的文件（**注意，这个文件不带扩展名，全面就叫做config**），然后添加以下内容：

```shell
#Gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
User git
IdentityFile ~/.ssh/id_rsa.gitee

#GitHub
Host github.com
HostName github.com
PreferredAuthentications publickey
User git
IdentityFile ~/.ssh/id_rsa.github
```

## 添加公钥到托管网站

Gitee添加公钥

登录Gitee，进入 `设置` ，点击 `SSH公钥` ，输入“标题”以及“公钥”。Gitee对应的公钥存放在 `id_rsa.gitee.pub` 文件中，打开全部复制即可：

![](https://img-blog.csdnimg.cn/4621a15022214460aec4750e5dadfd44.jpeg)

GitHub添加公钥

登录GitHub，进入 `Settings` ，依次点击 `SSH and GPG keys` -> `New SSH key` ，输入“Title”以及“Key”。GitHub对应的公钥存放在 `id_rsa.github.pub` 文件中，打开全部复制即可：

![](https://img-blog.csdnimg.cn/77b983c5aa154075b3b8c41da9446ea6.jpeg)

## 测试是否添加成功

## 测试是否添加成功

依次在Git Bash中输入：

```shell
ssh -T git@gitee.com # 测试Gitee
ssh -T git@github.com # 测试GitHub
```

第一次连接会让输入 `yes/no` ，输入 `yes` 即可：

![](https://img-blog.csdnimg.cn/e4798e672e084452932dfafc3204e9e4.jpeg)

出现下面即代表添加成功：

![](https://img-blog.csdnimg.cn/1c6324caf29640e5ac786d506e504388.jpeg)

