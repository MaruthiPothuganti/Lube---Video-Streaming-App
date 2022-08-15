import { Box, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <Box flex={1} sx={{ height: "calc(100vh - 64px)", padding: "1rem" }}>
      <Typography variant="h2">Main</Typography>
    </Box>
  );
};
