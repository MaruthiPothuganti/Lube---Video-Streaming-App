import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../features/SignUpSlice";

export const SignUp = () => {
  const initialFormValues = {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(signupUser({ formValues, navigate }));
  };

  return (
    <Box elevation={3}>
      <form onSubmit={formHandler}>
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
            type="text"
            label="Full Name"
            helperText=""
            variant="outlined"
            size="small"
            onChange={(e) =>
              setFormValues({ ...formValues, firstName: e.target.value })
            }
          />
          <TextField
            required
            id="email"
            type="email"
            label="Email"
            helperText=""
            variant="outlined"
            size="small"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
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
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          <TextField
            required
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            helperText=""
            variant="outlined"
            size="small"
            onChange={(e) =>
              setFormValues({ ...formValues, confirmPassword: e.target.value })
            }
          />
          <Stack spacing={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={
                formValues.password === "" ||
                formValues.confirmPassword === "" ||
                formValues.password !== formValues.confirmPassword
              }
            >
              SignUp
            </Button>
          </Stack>
        </FormControl>
      </form>
    </Box>
  );
};
