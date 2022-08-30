import { Box, Typography } from "@mui/material";
import React from "react";
import { VideoCard } from "./VideoCard";

export const Trending = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "100%", md: "90%" },
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Trending videos</Typography>
        <Typography variant="p">See All</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: "0.5rem",
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
