const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = env => {
  return createConfig(env === 'prod');
};

/**
 * @param {boolean} isProduction
 */
function createConfig(isProduction) {
  /**
   * @type {import('webpack').Configuration}
   */
  const config = {
    mode: isProduction ? 'production' : 'development',
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
        {
          test: /\.scss$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'sass-loader'],
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
          collapseWhitespace: true,
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

  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin({ filename: 'style.css' }));
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    };
  }

  return config;
}
