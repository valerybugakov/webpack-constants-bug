const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    filename: 'build.js'
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src')
    ]
  }
};
