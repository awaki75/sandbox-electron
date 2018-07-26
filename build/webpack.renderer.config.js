const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/renderer/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'renderer.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/renderer/index.html'),
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9080,
  },
};

module.exports = config;
