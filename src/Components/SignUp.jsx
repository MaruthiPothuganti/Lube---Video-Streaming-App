import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import React from "react";

export const SignUp = () => {
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
          id="fullName"
          label="Full Name"
          helperText=""
          variant="outlined"
          size="small"
        />

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
        <TextField
          required
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          helperText=""
          variant="outlined"
          size="small"
        />
        <Stack spacing={2}>
          <Button variant="contained" color="primary">
            SignUp
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};
