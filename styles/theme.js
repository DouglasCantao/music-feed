import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EE9A02', // customize your primary color
    },
    secondary: {
      main: '#1B4057', // customize your secondary color
    },
    // Add more custom colors as needed
    customColor: {
      primaryLight: '#F6DB81',
      primaryDark: '#F6DB81',
      primaryContrastText: '#131313;',
      primaryBackground: '#F7F7F8',
      
      /* Secondary colors */
      secondaryLight: '#9BBAD2',
      secondaryDark: '#072B3F',
      secondaryContrastText: '#F5F5F5',
      secondaryBackground: '#FAFAFA',

    },
  },
});

export default theme;