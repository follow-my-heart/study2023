const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'main.js'),
    filename: 'main.js'
  },
  plugins: [],
  module: {
    rules: []
  },
  mode: 'development'
}
