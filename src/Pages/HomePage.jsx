import { Box, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <Box flex={1}>
      <Typography
        variant="h2"
        color="initial"
        sx={{ background: "green", height: "calc(100vh - 64px)" }}
      >
        Main
      </Typography>
    </Box>
  );
};
