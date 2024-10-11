/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        boska: ['Boska-Variable', 'sans-serif'],
        "boska-italic": ['Boska-VariableItalic', 'sans-serif'],
        'sans':['Boska-Variable']
      }
    },
  },
  plugins: [],
}

module.exports = {
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily:{
        boska: ['Boska-Variable', 'sans-serif'],
        "boska-italic": ['Boska-VariableItalic', 'sans-serif'],
        general: ['GeneralSans-Variable', 'sans-serif'],
        "general-italic": ['GeneralSans-VariableItalic', 'sans-serif'],
      }
    },
  },
}
