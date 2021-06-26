module.exports = {
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif']
    },
    purge: [],
    darkMode: false, // or 'media' or 'class'
    extend: {
      colors: {
        primary: 'rgba(113, 195, 110, 1)',
        'primary-15': 'rgba(113, 195, 110, 0.15)',
        'primary-30': 'rgba(113, 195, 110, 0.30)',
        'primary-80': 'rgba(113, 195, 110, 0.80)',
        'blue-pastel': 'rgba(121, 203, 202, 1)',
        'blue-pastel-15': 'rgba(121, 203, 202, 0.15)',
        'blue-pastel-80': 'rgba(121, 203, 202, 0.8)',
        'red-pastel': 'rgba(229, 99, 99, 1)',
        'red-pastel-15': 'rgba(229, 99, 99, 0.15)',
        'red-pastel-80': 'rgba(229, 99, 99, 0.8)',
        'yellow-pastel': 'rgba(203, 195, 121, 1)',
        'yellow-pastel-15': 'rgba(203, 195, 121, 0.15)',
        'yellow-pastel-80': 'rgba(203, 195, 121, 0.8)',
        'green-pastel': 'rgba(113, 195, 110, 1)',
        'green-pastel-15': 'rgba(113, 195, 110, 0.15)',
        'green-pastel-80': 'rgba(113, 195, 110, 0.80)'
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
}
