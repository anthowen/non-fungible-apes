const mdx = require('@mdx-js/mdx')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './containers/**/*.{js,ts,jsx,tsx}',
    ],
    transform: {
      mdx: (content) => mdx.sync(content),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
