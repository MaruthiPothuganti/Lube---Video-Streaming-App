import { Avatar, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { MdOutlineMoreVert } from "./Icons";

export const VideoCard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="194"
          image={`https://img.youtube.com/vi/MqXjqOy-TA8/mqdefault.jpg`}
          //   image={`https://img.youtube.com/vi/${_id}/mqdefault.jpg`}
          alt="Paella dish"
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="Video">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MdOutlineMoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      </Card>
    </>
  );
};
