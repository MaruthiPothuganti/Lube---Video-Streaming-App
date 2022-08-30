import { Box } from "@mui/material";
import React from "react";

export const Login = () => {
  return (
    <Box>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    </Box>
  );
};
