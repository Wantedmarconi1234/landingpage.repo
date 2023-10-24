/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '275px', 'max': '624px'},
      'md': {'min': '625px', 'max': '974px'},
      'lg': {'min': '975px', 'max': '1534px'},
      'xl': {'min': '1535px', 'max': '1535px'},
    },

    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'fraunces': ['Fraunces', "serif"],
        'barlow': ['Barlow', "sans-serif"],    
      }
    },
  },
  plugins: [],
}