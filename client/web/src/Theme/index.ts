import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme ({
  typography: {
    fontFamily: 'Poppins',
    fontSize: 16,
    body1: {
      color: "#666",
      fontSize: '1rem',
      fontWeight: 400,
      marginBottom: '0.5rem',
    },
    body2: {
      color: "#666",
      fontSize: '0.75rem',
      fontWeight: 400,
      marginBottom: '1rem',
    },
  },
  palette: {
    primary: {
      main: '#9AC61E',
    },
    secondary: {
      main: '#f5f5f5',
    },
    text: {
      secondary: '#666',
    },
    success: {
      main: '#9AC61E',
    },
    error: {
      main: '#F2344B',
    },
    warning: {
      main: '#F98436',
    },
  }
});

export default theme;
