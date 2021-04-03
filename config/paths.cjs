const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../client'),

  build: path.resolve(__dirname, '../dist'),

  public: path.resolve(__dirname, '../public'),
}
