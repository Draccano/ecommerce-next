module.exports = {
  // plugins: {
  //   'tailwindcss/nesting': 'postcss-nesting',
  //   'postcss-flexbugs-fixes': {},
  //   'postcss-preset-env': {
  //     features: { 'nesting-rules': true },
  //   },
  //   tailwindcss: {},
  //   autoprefixer: {},
  // },
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 0,
        features: {
          'custom-properties': false,
          'nesting-rules': true,
        },
      },
    ],
    'tailwindcss',
    'autoprefixer',
  ],
}

// for testing purposes
// module.exports = {
//   plugins: [
//     require("tailwindcss"),
//     require('autoprefixer')
//   ]
// };
