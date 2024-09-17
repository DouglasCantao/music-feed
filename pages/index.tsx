import Head from "next/head";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import BaseCard from '../components/BaseCard';
import { useState, useEffect } from 'react'

export default function Home(props) {
  const [song, setSong] = useState(null)
 
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
        <Stack direction="row" spacing={2}>
          <BaseCard props={ song } />
        </Stack>
      </main>
    </>
    );
  }
}