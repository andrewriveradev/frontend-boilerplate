const { merge } = require('webpack-merge');
const ForkTSCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  output: {
    ...common.output,
    filename: '[name].js',
    chunkFilename: '[id].[name].js',
  },
  devServer: {
    liveReload: true,
    overlay: true,
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    port: 8080,
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    ...common.plugins,
    /**
     * [INFO][WEBPACK]
     * Используем данный плагин для проверки типов и для линтинга, так как он позволяет запускает эти операции
     * в отдельном процессе
     */
    new ForkTSCheckerPlugin(),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ReactRefreshPlugin()
  ],
});
