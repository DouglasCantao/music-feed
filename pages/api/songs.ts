import type { NextApiRequest, NextApiResponse } from 'next'

const axios = require('axios');
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

async function getArtistTopFive(artists) {
  let tracks = [];

  for (let id of artists) {

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
      const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {

        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
  
      // Extract and return the artists
      const resp = response.data.tracks.map((song) => {
        console.log(33, song);
        return {
          id: song.id,
          name: song.name,
          artist: song.artists[0].name,
          album: song.album.name,
          cover: song.album.images[0].url
        };

      });
      tracks = tracks.concat(resp);
      // console.log(34, resp);
      // return response.data.artists.items;
    } catch (error) {
      console.error('Error fetching artists top five songs:', error);
      return [];
    }
 
  }
  
  return tracks;

}

type ResponseData = {
  tracks: Array<string> | undefined,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const { artist } = req.query;
  const artistsIds = ['0TnOYISbd1XYRBk9myaseg'];

  const tracks = await getArtistTopFive(artistsIds);
  res.status(200).json({ tracks });
}




// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   id: Number,
//   name: string,
//   artist: string,
//   album: string,
//   cover: string,
// }[]
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json([{ id: 1231, name: 'A Place We Called Home', artist: 'Dreamshade', album: 'The Gift of Life', cover: 'cover.png' }, { id: 2355, name: 'A Place We Called Home', artist: 'Dreamshade', album: 'The Gift of Life', cover: 'cover.png' }])
// }