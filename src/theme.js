// En este módulo creamos el tema de paletas de colores
import { createTheme } from '@mui/material/styles';

export const createMyTheme = () => createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF.',
    },
    secondary: {
      main: '#f29325',
      light: '#f29325',
    },
    error: {
      main: '#d94f04',
    },
    info: {
      main: '#025259',
    },
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontFamily: 'Source Sans Pro',
    },
  },
});
