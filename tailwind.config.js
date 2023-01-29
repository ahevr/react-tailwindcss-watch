/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container : {
      center: true,
      screens: {
        lg: '1400px',
        xl: '1400px',
        '2xl' : '1400px'
      },
      // fontSize: {
      //   sm: '12px',
      //   base: '16px',
      //   xl: '25px',
      //   '2xl': '1.563rem',
      //   '3xl': '1.953rem',
      //   '4xl': '2.441rem',
      //   '5xl': '3.052rem',
      // }
    },
    extend: {
      // YAZI FONTLARI
      fontFamily: {
        // genel yazı fontu
        montserrat : ['Montserrat','sans-serif'],
        // başlıklar vb yazı fontu
        poppins : ['Poppins','sans-serif'],
      },
      spacing: {
        '128' : '700px',
        'fullx' : '100%'
      },
      flexBasis: {
        '1/7': '31%',
        '1/8': '50%'
      }
    },
  },
  plugins: [],
}
