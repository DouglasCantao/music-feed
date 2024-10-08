import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Cover from "@/public/img/cover.png";
import { Song } from "@/utils/type";

const BaseCard = ({ song }: { song: Song }) => {
  const { id, name, artist, cover, album } = song;
  console.log(name);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={Cover.src} title="cover" />
      <CardContent>
        <Typography variant="h5" sx={{ color: "text.secondary" }} noWrap>
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {artist}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {album}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default BaseCard;