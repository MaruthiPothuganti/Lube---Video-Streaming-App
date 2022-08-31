import {
  Box,
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

export const SignUp = () => {
  return (
    <Paper elevation={3}>
      <FormControl>
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
        <Stack spacing={2}>
          <Button variant="contained" color="primary">
            SignUp
          </Button>
        </Stack>
      </FormControl>
    </Paper>
  );
};
