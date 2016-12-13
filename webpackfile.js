const webpack = require('webpack')
const path = require('path')

const PROJECT_NAME = 'react-voice-components'

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  }
]

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: `${PROJECT_NAME}.js`,
    library: `${PROJECT_NAME}`,
    libraryTarget: 'commonjs2'
  },
  module: { rules }
}

