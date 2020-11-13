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
    screens: {
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
      'sm-dual': { min: '640px', max: '767px' },
      'md-dual': { min: '768px', max: '1023px' },
      'lg-dual': { min: '1024px', max: '1279px' },
    },
    extend: {
      colors: {
        primary: '#75ff8d',
        secondary: '#74f2f7',
        light: '#d8d8d8',
        dark: '#282828',
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
