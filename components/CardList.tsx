"use client";
import * as React from 'react';
import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import BaseCard from "@/components/BaseCard";
import { Song } from '@/utils/type';

const CardList = () => {
  const [songs, setSongs] = useState<Song[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/songs");
      const result = await res.json();
      setSongs(result);
    }

    fetchData();
  }, []);

  if (!songs) {

    return <></>
  }

  return (
    <>
      {
        songs.length > 0 ? (
          <Stack direction="row" spacing={2} m={2}>
            {songs.map(song => <BaseCard key={song.id} song={song} />)}
          </Stack>
        ) : <></>
      }
    </>
  )
}

export default CardList;