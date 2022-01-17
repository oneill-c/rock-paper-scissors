module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow Semi Condensed'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'blue-1': 'hsl(214, 47%, 23%)',
        'blue-2': 'hsl(237, 49%, 15%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
