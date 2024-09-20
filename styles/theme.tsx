import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // customize your primary color
    primary: {
      main: '#EE9A02',
      light: '#F6DB81',
      dark: '#131313',
      contrastText: '#F7F7F8',
    },
    // customize your secondary color
    secondary: {
      main: '#1B4057',
      light: '#9BBAD2',
      dark: '#072B3F',
      contrastText: '#F5F5F5',
    },
    background: {
      default: '#F7F7F8'
    },
  },
});

export default theme;