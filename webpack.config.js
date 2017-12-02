const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: 'index.html',
      template: './src/index.ejs',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist', 'public'),
    port: 3000,
    publicPath: '/',
    stats: { colors: true },
    overlay: {
      errors: true,
    },
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.hbs/,
        use: {
          loader: 'handlebars-loader',
        },
      },
    ],
  },
  stats: {
    children: false,
  },
};
