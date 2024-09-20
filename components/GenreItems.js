import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: theme.palette.customColor.primaryBackground,
  height: 100,
  width: 200,
  cursor: 'pointer',
  lineHeight: '100px',
  color: theme.palette.secondary.main,
}));

export default function GenreItems({ content, customizeFeed }) {
  const theme = useTheme();
  const [genre, setGenre] = useState(content)
  
  const handleItemClick = (index) => {
    let newGenre = content.map((item) => {
      if (item.id === index.id) {
        item.selected = !item.selected;
        item.elevation = item.selected ? 0 : 6;
      }
      return item;
    })
    setGenre(newGenre);
    customizeFeed(newGenre.filter(item => item.selected));
  };

  return (
  
    genre && genre.map((item) => {
      return <Item key={item.name} 
        elevation={item.elevation} 
        sx={{ backgroundColor: item.selected ? `${theme.palette.customColor.secondaryLight}` : `${ theme.palette.customColor.secondaryBackground }`, color: item.selected ? `${theme.palette.customColor.primaryLight }` : `${ theme.palette.secondary.main }` }}
        onClick={() => handleItemClick(item)}
        >
        {item.name.toUpperCase()}
      </Item>
    })
        
  );
}