import Head from "next/head";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import BaseCard from '../components/BaseCard';
import GenreSection from '../components/GenreSection';
import { useState, useEffect } from 'react'

import ConfigStepper from '../components/ConfigStepper';

export default function Home() {
  const [song, setSong] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState([])
  
  const updateSelectedGenre = (genre) => {
    setSelectedGenre(genre)
  }
 
  useEffect(() => {
    fetch('/api/song')
      .then((res) => res.json())
      .then((data) => {
        setSong(data)
      })
  }, [])
 
  if(song) {
    return (
      <>
      <Head>
        <title>Music Feed</title>
        <meta name="description" content="Have fun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ConfigStepper selectedGenre={ selectedGenre } initialStep={ updateSelectedGenre } />
        <GenreSection customizeFeed={ updateSelectedGenre } />



        {/* <Stack direction="row" spacing={2}>
          <BaseCard props={ song } />
        </Stack> */}
      </main>
    </>
    );
  }
}