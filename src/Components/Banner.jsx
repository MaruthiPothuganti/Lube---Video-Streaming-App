import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { banners } from "./Utils/banner";

export const Banner = () => {
  const navigate = useNavigate();
  const banner = banners[Math.floor(Math.random() * banners.length)];
  const { name, Icon } = banner;

  return (
    <Box position="relative" sx={{ width: "100%", margin: "auto" }}>
      <Box
        height="auto"
        sx={{
          display: "grid",
          placeItems: "center",
          border: "1px solid",
          padding: "1rem",
        }}
      >
        <Icon size={120} />
        <Typography variant="h3">{name}</Typography>
        <Button
          variant="contained"
          sx={{ margin: "1rem" }}
          onClick={() => navigate("/Explore")}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
};
