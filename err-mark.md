# 错误记录

## webpack
* 运行webpack-dev-server时报错的问题
  ```
  Cannot find module 'webpack-cli/bin/config-yargs'
  ```
  安装的webpack-cli版本不对（嗯，明明在另一台电脑不用webpack-cli的， 在这里就要安装了并且还挑版本）安装@3版本。最新@4.1.0不可用。  