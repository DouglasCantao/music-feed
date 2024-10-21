import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const SearchForm = styled(Paper)(({ theme }) => ({
  display: 'flex',
  padding: '2px 4px',
  alignItems: 'center',
  width: '400px',
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

export default function Navbar() {

  const test = async () => {
    const res = await fetch("/api/search?term=Linkin Park&limit=10");
    const result = await res.json();

    console.log("result = ", result);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <LibraryMusicIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Music Feed
          </Typography>
          <SearchForm>
            <IconButton sx={{ p: '10px', color: 'inherit' }} aria-label="home">
              <OtherHousesIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, color: 'inherit' }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search area' }}
            />
            <IconButton type="button" sx={{ p: '10px', color: 'inherit' }} aria-label="search" onClick={test}>
              <SearchIcon />
            </IconButton>
          </SearchForm>
        </Toolbar>
      </AppBar>
    </Box>
  );
}