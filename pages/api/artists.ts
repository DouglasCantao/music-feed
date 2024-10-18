import type { NextApiRequest, NextApiResponse } from 'next'

const axios = require('axios');
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

async function getArtistsByGenre(genres, limit = 10) {
  let artists = [];

  for (let genre of genres) {

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
      artists = artists.concat(response.data.artists.items);
      // return response.data.artists.items;
    } catch (error) {
      console.error('Error fetching artists:', error);
      return [];
    }
 
  }
  
  return artists;

}

type ResponseData = {
  artists: Array<string> | undefined,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const { genre } = req.query;
  const genres = genre && genre.length? genre.split(',') : ['pop'];

  const artists = await getArtistsByGenre(genres, 5);
  res.status(200).json({ artists });
}