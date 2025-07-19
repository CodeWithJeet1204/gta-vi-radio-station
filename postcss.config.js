// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},   // ✅ NEW — MUST be the first plugin
    autoprefixer: {},             // keep this
  },
};
