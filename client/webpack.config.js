const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { join } = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';
const paths = {
  srcAssetsPath: join(__dirname, 'static/assets'),
  templateSrcPath: join(__dirname, 'static', 'index.html'),
  clientEntry: join(__dirname, 'src', 'App.jsx'),
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
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  devServer: {
    static: { directory: paths.clientOutput },
    compress: false,
    hot: false,
    liveReload: true,
    historyApiFallback: true,
    port: process.env.PORT || 8080,
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components'],
          },
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: paths.srcAssetsPath, from: './**', to: join(paths.clientOutput, 'assets/') }],
    }),
    new HtmlWebpackPlugin({
      template: paths.templateSrcPath,
      xhtml: true,
      inject: 'body',
    }),
    new Dotenv({
      path: join(__dirname, `.env${isDevelopment ? '.dev' : ''}.client`),
    }),
  ],
};

module.exports = config;
