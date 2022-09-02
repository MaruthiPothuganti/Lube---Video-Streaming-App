import { Box, TextField, FormControl, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { loginUser } from "../features/LoginSlice";
import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);
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
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          helperText=""
          variant="outlined"
          size="small"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setCredentials({
                email: "test@gmail.com",
                password: "TestUser123",
              });
              console.log("done");
            }}
          >
            Guest Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(loginUser(credentials));
            }}
          >
            Login
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};
