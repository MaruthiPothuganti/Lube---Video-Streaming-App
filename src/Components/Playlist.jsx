import { Box, Typography } from "@mui/material";
import { VideoCard } from "./VideoCard";

export const Playlist = ({ playlist }) => {
  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography variant="h5">{playlist.title}</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        {playlist.videos.map((video) => {
          <VideoCard video={video} />;
        })}
      </Box>
    </Box>
  );
};
