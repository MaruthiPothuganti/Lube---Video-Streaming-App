import { Box, Typography } from "@mui/material";
import { VideoCard } from "./VideoCard";

export const Featured = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "100%", md: "90%" },
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Featured videos</Typography>
        <Typography variant="p">See All</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
          padding: "0.5rem",
        }}
      >
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Box>
    </Box>
  );
};

export default Featured;
