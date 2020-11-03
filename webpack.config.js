const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/pack.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'f-com.js',
    library: 'fCom',
    libraryTarget: 'umd'
  },
  devServer: {
    // 告诉服务器从哪里提供内容
    contentBase: false,
    hot: true,
    port: 8060,
    open: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}