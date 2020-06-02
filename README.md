# 开发常用到的工具集合

下载文件到地本地，软链接至项目根目录中

将代码克隆到本地文件夹（以`code`文件夹为例）

*MacOS*

假设code目录为`/Users/mac/Documents/code`，项目目录为`/Users/mac/Documents/program/vue-helloword`

```
ln -s /Users/mac/Documents/code/f-com /Users/mac/Documents/program/
```

如果没有权限侧执行：

```
sudo ln -s /Users/mac/Documents/code/f-com /Users/mac/Documents/program/
```

*Windows*

假设code目录为`D:\script\code` ,项目日录为`D:\program\vue-helloword`

cmd:

```
mklink /j D:\script\code\f-com D:\program\vue-helloword
```

powershell:

```
cmd /c mklink /j D:\script\code\f-com D:\program\vue-helloword
```