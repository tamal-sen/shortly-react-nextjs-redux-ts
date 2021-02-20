import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

// Create a theme instance.
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    neutral: {
      gray: React.CSSProperties['color']
      grayish_violet: React.CSSProperties['color']
      very_dark_blue: React.CSSProperties['color']
      very_dark_violet: React.CSSProperties['color']
    }
  }
  interface PaletteOptions {
    neutral: {
      gray: React.CSSProperties['color']
      grayish_violet: React.CSSProperties['color']
      very_dark_blue: React.CSSProperties['color']
      very_dark_violet: React.CSSProperties['color']
    }
  }
}

const theme = {
  shape: {
    borderRadius: 50,
  },
  typography: {
    fontSize: 18,
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '6rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '4rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1.125rem',
    },
    body2: {
      fontSize: '0.85rem',
    },
  },

  palette: {
    neutral: {
      gray: '#BFBFBF',
      grayish_violet: '#9E9AA7',
      very_dark_blue: '#35323E',
      very_dark_violet: '#232127',
    },
    primary: {
      main: '#2ACFCF', //Cyan: hsl(180, 66%, 49%)
      dark: '#3B3054', //Dark Violet: hsl(257, 27%, 26%)
    },
    secondary: {
      main: '#F46262', //Red: hsl(0, 87%, 67%)
    },
    error: {
      main: '#ff4e00',
    },
    success: {
      main: '#3aaf00',
    },
    background: {
      default: '#f2f2f2',
      paper: '#fff',
    },
    text: {
      primary: '#333333',
    },
  },
}

export default responsiveFontSizes(createMuiTheme(theme))
