import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#242424',
      green: '#86c232',
    },
    background: {
      default: '#121212',
      paper: '#242424',
    },
    secondary: {
      main: '#f50004',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});
