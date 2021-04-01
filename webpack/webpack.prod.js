const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    ...common.output,
    filename: '[name].[contenthash].js',
    chunkFilename: '[id].[name].[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new ImageMinimizerPlugin({
      test: /\.(jpg|jpeg|png)$/,
      deleteOriginalAssets: false,
      severityError: "warning",
      filename: "[name].webp",
      loader: false,
      minimizerOptions: {
        plugins: [
          ["imagemin-webp"],
          ["mozjpeg", { quality: 80 }],
          ["gifsicle", { interlaced: true, optimizationLevel: 3 }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                "imagemin-webp",
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    })
  ]
});
