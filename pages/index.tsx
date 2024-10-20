import Head from "next/head";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react'

import GenreSection from '../components/GenreSection';
import ConfigStepper from '../components/ConfigStepper';
import ArtirtsSection from '../components/ArtirtsSection';
import FeedSection from '../components/FeedSection';

export default function Home() {
  const [songs, setSongs] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState([])
  const [selectedArtirts, setSelectedArtirts] = useState([])
  const [configStep, setConfigStep] = useState(2)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const updateSelectedGenre = (genre: any) => {
    setSelectedGenre(genre)
  }

  const updateSelectedArtirts = (artirts: any) => {
    setSelectedArtirts(artirts)
  }

  const updateConfigStep = (step: number) => {
    setConfigStep(step)
  }
 
  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const response = await fetch('/api/songs')
        const result = await response.json()
        if (isMounted) {
          setSongs(result)
          setIsLoading(false)
        }
      } catch (error) {
        if (isMounted) {
          setError(error)
          setIsLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, []) // Empty dependency array ensures the effect runs only once

  if (isLoading) return <div>Loading...should be card skeleton</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <>
    <main>
      <ConfigStepper 
      selectedGenre={ selectedGenre }
      selectedArtirts={ selectedArtirts }
      configStep={ updateConfigStep } />
      <FeedSection songs={ songs } />
    </main>
  </>
  );

  // if(configStep === 0) {
  //   return (
  //     <>
  //     <Head>
  //       <title>Music Feed</title>
  //         <meta name="description" content="Have fun" />
  //         <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <main>
  //       <ConfigStepper 
  //       selectedGenre={ selectedGenre }
  //       selectedArtirts={ selectedArtirts }
  //       configStep={ updateConfigStep } />
  //       <GenreSection customizeFeed={ updateSelectedGenre } />
  //     </main>
  //   </>
  //   );
  // }
 
  // else if(configStep === 1) {
  //   return (
  //     <>
  //     <main>
  //       <ConfigStepper 
  //       selectedGenre={ selectedGenre }
  //       selectedArtirts={ selectedArtirts }
  //       configStep={ updateConfigStep } />
  //       <ArtirtsSection configFeed={ updateSelectedArtirts } />
  //     </main>
  //   </>
  //   );
  // } else if(configStep === 2 && songs) {
  //   return (
  //     <>
  //     <main>
  //       <ConfigStepper 
  //       selectedGenre={ selectedGenre }
  //       selectedArtirts={ selectedArtirts }
  //       configStep={ updateConfigStep } />
  //       <FeedSection songs={ songs } />
  //     </main>
  //   </>
  //   );
  // }
    //   return (
    //   <>
    //   <main>
    //     <ConfigStepper 
    //     selectedGenre={ selectedGenre }
    //     selectedArtirts={ selectedArtirts }
    //     configStep={ updateConfigStep } />
    //     <FeedSection songs={ songs } />
    //   </main>
    // </>
    // );
}