// postcss.config.js

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    ['postcss-preset-env', {
      stage: 1,
    }],
  ],
};


