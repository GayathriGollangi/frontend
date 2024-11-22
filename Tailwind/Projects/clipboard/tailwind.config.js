/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      "sm":"375px"
    },
    fontFamily:{
      'sans':['Bai Jamjuree','sans-serif']
    },
    extend: {
      colors: {
        'strongCyan': 'hsl(171, 66%, 44%)',
        'lightBlue':'hsl(233, 100%, 69%)',
        'darkGreyishBlue':"hsl(210, 10%, 33%)",
        'greyishBlue':'hsl(201, 11%, 66%)'
      },
    },
  },
  plugins: [],
}

