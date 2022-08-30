import { Box, Typography } from "@mui/material";
import { VideoCard } from "../Components";

export const LikedVideos = () => {
  return (
    <Box
      flex={1}
      sx={{
        height: "calc(100vh - 64px)",
        padding: "1rem",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#c9bab9",
          padding: "0.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h2" component="p" color="#1976d2">
            8
          </Typography>
          <Typography variant="h2" component="p" color="inherit">
            Videos
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Box>
    </Box>
  );
};
