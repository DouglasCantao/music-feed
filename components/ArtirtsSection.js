import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useState, useEffect } from 'react';

import BaseHeading from '../components/BaseHeading';
import ArtistItems from '../components/ArtistItems';

export default function ArtirtsSection ({ configFeed }) {
  const [artist, setArtist] = useState(null)

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem('feed-cfg'));
    fetch(`/api/artists`)
      .then((res) => res.json())
      .then((data) => {
        const { artists } = data;
        setArtist(artists)
        console.log(34, artists)
      })
  }, [])
  
  if(artist) {
    return (
      <Container>
        <BaseHeading content="Customize your Feed" />
        <Grid container
          direction="row" 
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
          <ArtistItems content={ artist } configFeed={ configFeed } />
  
        </Grid>

      </Container>
    );
    
  }

}