const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

const paths = {
  srcAssetsPath: join(__dirname, 'client/src/assets'),
  templateSrcPath: join(__dirname, 'client', 'static', 'index.html'),
  clientEntry: join(__dirname, 'client', 'src', 'app.jsx'),
  bundleOutputPath: join(__dirname, 'dist/client'),
  clientOutput: join(__dirname, 'dist/client'),
};

/** @type {import('webpack').Configuration config} */
const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: paths.clientEntry,
  output: {
    filename: '[name].bundle.js',
    path: paths.bundleOutputPath,
  },
  devServer: {
    static: { directory: paths.clientOutput },
    compress: false,
    hot: false,
    liveReload: true,
    historyApiFallback: true,
    port: 8080,
    watchFiles: [join(paths.srcAssetsPath, '/**')],
    client: {
      logging: 'info',
      progress: true,
    },
    proxy: {
      '/api': 'http://localhost:8088/api',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.templateSrcPath,
      xhtml: true,
      inject: 'body',
    }),
  ],
};

module.exports = config;
