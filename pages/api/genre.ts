import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  genre: Array<string>,
}

const genre = [
  "acoustic",
  "alt-rock",
  "alternative",
  "anime",
  "dance",
  "death-metal",
  "deep-house",
  "electronic",
  "heavy-metal",
  "hip-hop",
  "house",
  "indie",
  "jazz",
  "k-pop",
  "metal",
  "metalcore",
  "new-release",
  "opera",
  "piano",
  "pop",
  "power-pop",
  "progressive-house",
  "punk",
  "r-n-b",
  "reggae",
  "reggaeton",
  "rock",
]
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ genre })
}
