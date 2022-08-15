import { Box, Typography } from "@mui/material";
import React from "react";
import { VideoCard } from "../Components";

export const HomePage = () => {
  return (
    <Box
      flex={1}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        height: "calc(100vh - 64px)",
        padding: "1rem",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </Box>
  );
};
