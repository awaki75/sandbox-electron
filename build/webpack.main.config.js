const path = require('path');

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

  return config;
}
