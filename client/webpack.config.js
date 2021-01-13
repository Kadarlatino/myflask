const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath)
const host = process.env.HOST || 'localhost'
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'development',
  entry: resolveAppPath('src/js/index.js'),

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
