import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#050505',
      paper: '#0a0a0a',
    },
    primary: {
      main: '#00ff66',
      light: '#33ff85',
      dark: '#00cc52',
    },
    secondary: {
      main: '#1a1a1a',
    },
    text: {
      primary: '#ebebeb',
      secondary: '#888888',
    },
    divider: '#1a1a1a',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: '#ebebeb',
    },
    h2: {
      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      color: '#ebebeb',
    },
    h3: {
      fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
      color: '#ebebeb',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#ebebeb',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#ebebeb',
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase' as const,
      color: '#888888',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#b0b0b0',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#888888',
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.02em',
      textTransform: 'none' as const,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#050505',
          color: '#ebebeb',
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: 12,
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: '#00ff66',
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 32px rgba(0, 255, 102, 0.08)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: '1px solid #2a2a2a',
          color: '#b0b0b0',
          fontSize: '0.75rem',
          fontWeight: 500,
          transition: 'all 0.25s ease',
          '&:hover': {
            borderColor: '#00ff66',
            color: '#00ff66',
            backgroundColor: 'rgba(0, 255, 102, 0.05)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 20px',
          fontSize: '0.875rem',
          transition: 'all 0.25s ease',
        },
        outlined: {
          borderColor: '#2a2a2a',
          color: '#ebebeb',
          '&:hover': {
            borderColor: '#00ff66',
            color: '#00ff66',
            backgroundColor: 'rgba(0, 255, 102, 0.05)',
          },
        },
        contained: {
          backgroundColor: '#00ff66',
          color: '#050505',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#33ff85',
            boxShadow: '0 4px 20px rgba(0, 255, 102, 0.3)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: 16,
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#b0b0b0',
          textDecoration: 'none',
          transition: 'color 0.25s ease',
          '&:hover': {
            color: '#00ff66',
          },
        },
      },
    },
  },
});

export default theme;
