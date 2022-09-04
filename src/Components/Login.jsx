import { Box, TextField, FormControl, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { loginUser } from "../features/LoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const initialState = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialState);
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ credentials, navigate, from }));
  };

  return (
    <Box elevation={3}>
      <form onSubmit={loginHandler}>
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
            type="email"
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
              }}
            >
              Guest Login
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Stack>
        </FormControl>
      </form>
    </Box>
  );
};
