import { Box, Typography } from "@mui/material";
import { VideoCard } from "./VideoCard";

export const Playlist = () => {
  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography variant="h5">Playlist One</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Box>
    </Box>
  );
};
