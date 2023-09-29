import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#DB2777',
    },
    ghostwhite: {
      main: '#F8F8FF',
      light: '#f9f9ff',
      dark: '#adadb2',
    },
  },
  typography: {
    fontFamily: ['Saira', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem', // 48px
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1.125rem', // 18px
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'p',
        subtitle2: 'p',
        body1: 'span',
        body2: 'span',
      },
    },
  },
})

export default theme
