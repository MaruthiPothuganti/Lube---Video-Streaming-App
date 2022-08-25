import { Box, Typography } from "@mui/material";
import { VideoCard } from "./VideoCard";
import Carousel from "react-material-ui-carousel";

export const Featured = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="h6">Featured videos</Typography>
        <Typography variant="p">See All</Typography>
      </Box>
      <Carousel
        indicatorIconButtonProps={{
          style: {
            display: "none",
          },
        }}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "cornflowerblue",
            borderRadius: 0,
            opacity: "1",
          },
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
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Carousel>
    </Box>
  );
};
