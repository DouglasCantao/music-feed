import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useState, useEffect } from 'react';

import BaseHeading from '../components/BaseHeading';
import GenreItems from '../components/GenreItems';

export default function Elevation({ customizeFeed }) {
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
  
  if(genre) {
    return (
      <Container>
        <BaseHeading content="Customize your Feed" />
        <Grid container
          direction="row" 
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
          <GenreItems content={ genre } customizeFeed={ customizeFeed } />
  
        </Grid>

      </Container>
    );
    
  }

}