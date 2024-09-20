import Head from "next/head";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import BaseCard from "@/components/BaseCard";

export default function Home(props) {
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
          <BaseCard />
        </Stack>
      </main>
    </>
  );
}