import { Avatar, Card, CardMedia, Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useLocation } from "react-router-dom";
import { PopupMenu } from "./PopupMenu";

export const VidCard = ({ video }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          minWidth: 250,
          border: "1px solid #f3e5f5",
          ":hover": { cursor: "pointer" },
        }}
      >
        <CardMedia
          component="img"
          height="168"
          image={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
          alt={video.title}
          sx={{
            objectFit: "contain",
          }}
        />
        <Box padding={1.5} sx={{ display: "flex" }}>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Video">
            {video.creator.charAt(0)}
          </Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              padding: "0 0.5rem",
            }}
          >
            <Box>
              <Typography variant="body2">{video.title}</Typography>
              <Typography variant="subtitle2">{video.createdAt}</Typography>
            </Box>
            <PopupMenu video={video} />
          </Box>
        </Box>
      </Card>
    </>
  );
};
