const webpack = require('webpack');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');
const common = require('./webpack.common.cjs');

dotenv.config();

module.exports = merge(common, {
  output: {
    publicPath: '/',
  },
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
    host: 'localhost',
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`,
    },
  },

  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
