import { Box } from "@mui/material";
import React from "react";

import { VideoCard, Slider, Featured } from "../Components";

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
      <Slider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        <Featured />
      </Box>
    </Box>
  );
};
