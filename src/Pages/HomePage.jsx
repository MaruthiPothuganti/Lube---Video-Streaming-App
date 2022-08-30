import { Box, Typography } from "@mui/material";
import React from "react";

import { Slider, Featured, Trending } from "../Components";

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
        <Trending />
        <Featured />
      </Box>
      <Box
        sx={{
          background: "#1976d2",
          width: "100%",
          height: "50px",
          borderRadius: "0  0 0.5rem 0.5rem",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography variant="body1" color="initial">
          All Rights Reserved | © 2022
        </Typography>
      </Box>
    </Box>
  );
};
