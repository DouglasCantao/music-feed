import type { NextApiRequest, NextApiResponse } from "next";
import { Song } from "@/utils/type";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Song[]>
) {
  res.status(200).json([
    {
      id: "2up3OPMp9Tb4dAKM2erWXQ",
      name: "A Place We Called Home",
      artist: "Dreamshade",
      album: "The Gift of Life",
      cover: "cover.png",
    },
    {
      id: "3up3OPMp9Tb4dAKM2erWXQ",
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      cover: "cover.png",
    },
    {
      id: "4up3OPMp9Tb4dAKM2erWXQ",
      name: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      cover: "cover.png",
    },
    {
      id: "5up3OPMp9Tb4dAKM2erWXQ",
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      cover: "cover.png",
    },
  ]);
}
