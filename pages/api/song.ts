import type { NextApiRequest, NextApiResponse } from "next";
import { Song } from "@/utils/type";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Song>
) {
  res
    .status(200)
    .json({
      name: "A Place We Called Home",
      artist: "Dreamshade",
      album: "The Gift of Life",
      cover: "cover.png",
    });
}
