const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/pack.ts',
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
    open: false,
    quiet: false,
    host: '0.0.0.0'
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { 
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.json')
　　　　　}
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}