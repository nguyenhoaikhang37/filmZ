const theme = {
  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'Rowdies, cursive',
  },
  colors: {
    dark: '#121829',
    header: '#11182a',
    primary: '#5A4AF4',
    secondary: '#1EA5FC',
    pink: '#B66DFF',
    success: '#05CE91',
    error: '#FF6161',
    warning: '#FFAD49',

    white50: '#EBEEF5',
    white200: '#A8AEBF',

    pink200: '#BEB7FB',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1023.98px',
  },
};

export type ThemeType = typeof theme;

export default theme;
