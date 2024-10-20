import type { NextApiRequest, NextApiResponse } from 'next'

const axios = require('axios');
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

async function getSearch(term, limit=5, offset=0) {

  const encodeString = (str) => {
    return encodeURIComponent(str).replace(/%20/g, '+');
  }

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
        q: `${encodeString(term)}`,
        type: 'track',
        limit: limit,
        offset: offset
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    // Extract and return the tracks
    const resp = response.data.tracks.items.map((song) => {
 
      return {
        id: song.id,
        name: song.name,
        artist: song.artists[0].name,
        album: song.album.name,
        cover: song.album.images[0].url
      };

    });

    return resp;
  } catch (error) {
    console.error('Error fetching artists:', error);
    return [];
  }

}

type ResponseData = {
  tracks: Array<string> | undefined,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const { term, limit, offset } = req.query;
  const tracks = await getSearch(term, limit, offset);
  res.status(200).json({ tracks });
}