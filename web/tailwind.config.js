module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./web/src/**/*.js', './web/src/**/*.css', './web/src/**/*.html'],
  theme: {
    fontFamily: {
      sans: [
        'Poppins',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      serif: [
        '"DM Serif Display"',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      'screen-1/4': '25vh',
      'screen-1/2': '50vh',
      'screen-3/4': '75vh',
      screen: '100vh',
    },
    extend: {
      colors: {
        neon: '#75ff8d',
        sky: '#74f2f7',
        stone: '#d8d8d8',
      },
      margin: {
        '-wrap': '-5.62vw',
        wrap: '5.62vw',
      },
      padding: {
        wrap: '5.62vw',
      },
    },
  },
  variants: {},
  plugins: [],
}
