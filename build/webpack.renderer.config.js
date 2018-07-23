const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
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
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'electron-renderer',
  plugins: [new VueLoaderPlugin()],
};

module.exports = config;
