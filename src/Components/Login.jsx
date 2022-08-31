import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
  Paper,
  InputLabel,
  Input,
  Button,
  Stack,
} from "@mui/material";
import React from "react";

export const Login = () => {
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
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Guest Login
          </Button>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </FormControl>
    </Paper>
  );
};
