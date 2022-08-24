import { Box } from "@mui/material";
import React from "react";

import { VideoCard, Banner } from "../Components";

export const HomePage = () => {
  return (
    <Box
      flex={1}
      sx={{
        height: "calc(100vh - 64px)",
        padding: "1rem",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Banner />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem",
          justifyContent: "center",
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
    </Box>
  );
};
