import { Box, Typography } from "@mui/material";

export const SideNav = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Typography
        variant="h2"
        color="initial"
        sx={{ background: "red", height: "calc(100vh - 64px)" }}
      >
        SideNav
      </Typography>
    </Box>
  );
};
