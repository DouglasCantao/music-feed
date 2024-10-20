import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BaseCard from '../components/BaseCard';

export default function FeedSection({ songs }) {

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={3}
        sx={{justifyContent: 'center', alignItems: 'center'}}>
        {songs && songs.tracks.map((song) => (
          <BaseCard key={song.id} props={song} />
        ))}
      </Stack>
    </Box>
  );
}