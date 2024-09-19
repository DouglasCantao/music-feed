import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

import BaseHeading from '../components/BaseHeading';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: theme.palette.customColor.secondaryBackground,
  height: 100,
  width: 200,
  cursor: 'pointer',
  lineHeight: '100px',
  color: theme.palette.secondary.main,
}));

export default function Elevation() {

  const [genre, setGenre] = useState(null)

  useEffect(() => {
    fetch('/api/genre')
      .then((res) => res.json())
      .then((data) => {
        setGenre(data.genre.map(item => {
          return {
            id: item,
            name: item,
            selected: false,
            elevation: 6
          }
        }))
      })
  }, [])
  
  const handleItemClick = (index) => {
    let newGenre = genre.map((item) => {
      if (item.id === index.id) {
        item.selected = !item.selected;
        item.elevation = item.selected ? 0 : 6;
      }
      return item;
    })
    setGenre(newGenre);
  };

  return (
    <Container>
      <BaseHeading content="Customize your Feed" />

      <Grid container
        direction="row" 
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ flexWrap: 'wrap' }}
        >
        {
          genre && genre.map((item) => {
            return <Item key={item.name} 
              elevation={item.elevation} 
              backgroundcolor={item.selected ? 'theme.palette.customColor.secondaryLight' : 'background.paper'}
              onClick={() => handleItemClick(item)}
              >
              {item.name.toUpperCase()}
            </Item>
          })
        }

      </Grid>
    </Container>

  );
}