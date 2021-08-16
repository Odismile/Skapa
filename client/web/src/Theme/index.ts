import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core';

const theme = createMuiTheme ({
  typography: {
    fontFamily: 'Nunito',
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
    h1: {
      fontSize: '1.75rem',
    },
    h6:{
      fontSize: 14,
      fontWeight: 700,
    }
  },
  palette: {
    primary: {
      main: '#8277FF',
    },
    secondary: {
      main: '#ece8ff',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
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
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
        fontFamily: 'Nunito',
        fontSize: '1rem',
        fontWeight: 600,
        height: 50,
        lineHeight: "100%",
        minWidth: 100,
        textTransform: "none",
        "&:hover" : {
          background: "rgb(236 232 255 / 6%)",
        },
      },
      label: {
        justifyContent: 'center',
      },
      contained: {
        backgroundColor: "#8870ff",
        borderRadius: 0,
        color: '#fff',
        boxShadow: 'none',
        transition: "all .3s ease-in-out",
        '&:hover': {
          backgroundColor: "#8870ff",
          boxShadow: 'none',
          color: '#fff',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
      containedSecondary: {
        backgroundColor: '#fff',
        color: '#7830ED',
        fontWeight: 400,
        '&:hover': {
          backgroundColor: '#fff',
          color: '#7830ED',
        },
      },
    },
    MuiLink: {
      root: {
        color: '#8870ff',
        textDecoration: 'none',
        "&:hover" : {
          textDecoration: 'none',
        },
        "&:focus": {
          outline: "none",
        }
      },
    },
  },
});

export default theme;
