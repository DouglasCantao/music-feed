import type { NextApiRequest, NextApiResponse } from 'next'

const axios = require('axios');
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

async function getArtistsByGenre(genre, limit = 10) {
  try {
    // First, get an access token
    const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', 
      'grant_type=client_credentials', {
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const accessToken = tokenResponse.data.access_token;

    // Now use the token to make the API request
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      params: {
        q: `genre:${genre}`,
        type: 'artist',
        limit: limit
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    // Extract and return the artists
    return response.data.artists.items;
  } catch (error) {
    console.error('Error fetching artists:', error);
    return [];
  }
}

// Usage
getArtistsByGenre('house', 5)
  .then(artists => {
    return artists;
  })
  .catch(error => {
    console.error('Error:', error);
  });


type ResponseData = {
  artists: Array<string>,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  console.log(34, req)

  const artists = await getArtistsByGenre('house', 5);
  res.status(200).json({ artists });
}