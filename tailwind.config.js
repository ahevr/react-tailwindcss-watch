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
      }
    },
    extend: {
      // YAZI FONTLARI
      fontFamily: {
        // genel yazı fontu
        montserrat : ['Montserrat','sans-serif'],
        // başlıklar vb yazı fontu
        poppins : ['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}
