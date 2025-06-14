import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a base theme
let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#56748e',
      main: '#2c3e50',
      dark: '#1a2733',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#5d7897',
      main: '#34495e',
      dark: '#23303d',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0e1621',
      paper: '#162535',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  typography: {
    fontFamily: '"JetBrains Mono", monospace',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',  // Removes all-caps from buttons
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.1)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
        elevation1: {
          boxShadow: '0px 3px 10px rgba(15, 28, 42, 0.3)',
        },
        elevation2: {
          boxShadow: '0px 4px 15px rgba(15, 28, 42, 0.35)',
        },
        elevation3: {
          boxShadow: '0px 5px 20px rgba(15, 28, 42, 0.4)',
        },
      },
      variants: [
        {
          props: { component: 'header' },
          style: {
            borderRadius: 0,
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '16px 0',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 12px 20px rgba(15, 28, 42, 0.4)',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 10px rgba(15, 28, 42, 0.2)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width: 600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
  },
});

// Apply responsive typography
theme = responsiveFontSizes(theme);

export default theme;