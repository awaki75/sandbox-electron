const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  entry: './src/main/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'electron-main',
  node: {
    __dirname: false,
  },
};

module.exports = config;
