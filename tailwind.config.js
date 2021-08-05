module.exports = {
  purge: [
    './index.html',
    './src/**/*.{svelte,js,ts,jsx,tsx}',
    './widget/**/*.{svelte,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
