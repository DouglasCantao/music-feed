import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  name: string,
  artist: string,
  album: string,
  cover: string,
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ name: 'A Place We Called Home', artist: 'Dreamshade', album: 'The Gift of Life', cover: 'cover.png' })
}