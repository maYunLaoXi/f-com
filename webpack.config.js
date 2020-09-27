const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'f-com.js',
    library: 'fCom',
    libraryTarget: 'umd'
  }
}