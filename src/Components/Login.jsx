import { Box, TextField, FormControl, Button, Stack } from "@mui/material";
import React from "react";

export const Login = () => {
  return (
    <Box elevation={3}>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          required
          id="email"
          label="Email"
          helperText=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          helperText=""
          variant="outlined"
          size="small"
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Guest Login
          </Button>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};
