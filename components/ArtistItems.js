import * as React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const Item = styled(Avatar)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: 200,
  width: 200,
  cursor: 'pointer',
  opacity: 0.5,
  color: theme.palette.secondary.main,
}));

export default function ArtistItems({ content }) {
  const theme = useTheme();
  const [artist, setArtist] = useState(content);

  const artistInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    color: theme.palette.customColor.primarydark,
    fontSize: '0.8rem',
  }
  
  const handleItemClick = (index) => {
    let newArtist = content.map((item) => {
      if (item.id === index.id) {
        item.selected = !item.selected;

      }
      return item;
    })
    setArtist(newArtist);
    // customizeFeed(newArtist.filter(item => item.selected));
  };

  return (
  
    artist && artist.map((item) => {
      return <div key={item.id}>
        <Item 
        sx={{opacity: item.selected ? 1 : 0.5}}
        src={item.images[2].url} 
        onClick={() => handleItemClick(item)}
        >
      </Item>
        <div style={ artistInfoStyle }>
          <span>{ item.name.toUpperCase() }</span>
          <span>{ item.followers.total } followers</span>
        </div>
      </div>
    })
        
  );
}