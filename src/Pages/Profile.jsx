import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/LoginSlice";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box
      flex={1}
      sx={{
        height: "calc(100vh - 64px)",
        padding: "1rem",
        overflowY: "scroll",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h1" color="initial">
          Hello User
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          LOGOUT
        </Button>
      </Box>
    </Box>
  );
};
