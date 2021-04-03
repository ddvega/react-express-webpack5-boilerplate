const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.cjs');
const dotenv = require('dotenv');
const paths = require('./paths.cjs');

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
    host: '0.0.0.0',
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
