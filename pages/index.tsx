import Head from "next/head";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import BaseCard from '../components/BaseCard';
import { useState, useEffect } from 'react'

import GenreSection from '../components/GenreSection';
import ConfigStepper from '../components/ConfigStepper';
import ArtirtsSection from '../components/ArtirtsSection';

export default function Home() {
  const [song, setSong] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState([])
  const [selectedArtirts, setSelectedArtirts] = useState([])
  const [configStep, setConfigStep] = useState(0)
  
  const updateSelectedGenre = (genre) => {
    setSelectedGenre(genre)
  }

  const updateSelectedArtirts = (artirts) => {
    setSelectedArtirts(artirts)
  }

  const updateConfigStep = (step) => {
    setConfigStep(step)
  }
 
  useEffect(() => {
    fetch('/api/song')
      .then((res) => res.json())
      .then((data) => {
        setSong(data)
      })
  }, [])

  if(configStep === 0) {
    return (
      <>
      <Head>
        <title>Music Feed</title>
          <meta name="description" content="Have fun" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ConfigStepper 
        selectedGenre={ selectedGenre }
        selectedArtirts={ selectedArtirts }
        configStep={ updateConfigStep } />
        <GenreSection customizeFeed={ updateSelectedGenre } />
      </main>
    </>
    );
  }
 
  else if(configStep === 1) {
    return (
      <>
      <main>
        <ConfigStepper 
        selectedGenre={ selectedGenre }
        selectedArtirts={ selectedArtirts }
        configStep={ updateConfigStep } />
        <ArtirtsSection configFeed={ updateSelectedArtirts } />
      </main>
    </>
    );
  } else if(configStep === 2 && song) {
    return (
      <>
      <main>
        <ConfigStepper 
        selectedGenre={ selectedGenre }
        selectedArtirts={ selectedArtirts }
        configStep={ updateConfigStep } />
        <Stack direction="row" spacing={2}>
          <BaseCard props={ song } />
        </Stack>
      </main>
    </>
    );
  }
}