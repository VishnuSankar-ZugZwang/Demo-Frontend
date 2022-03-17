module.exports = {
  plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
  ]
}
const postcssOpts = {
  extract: 'style.css',
  plugins: [
      () => postcssUrl(postcssUrlOpts)
  ]
};