module.exports = {
    parser: 'postcss-scss',
    syntax: 'postcss-scss',
    plugins: [
      [
        "postcss-preset-env",
        {
          // Options
        },
      ],
      require('autoprefixer'),
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: false
            }
          }
        ]
      })
    ]
  }
  