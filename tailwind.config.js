module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        cYellow: '#FB9400',
        lightGreen: '#E2F4EC',
        cPurple: '#533B5D',
      },
    },
  },
  plugins: [],
};
