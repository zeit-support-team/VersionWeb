const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
      extensions: []
  },
  module: {
      rules: []
  },
  plugins: [
  
  
  ]
}