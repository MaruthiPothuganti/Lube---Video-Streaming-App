import { Box } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import { Button, Typography } from "@mui/material";
import { banners } from "./Utils/banner";
import { useNavigate } from "react-router-dom";

export const Slider = () => {
  const navigate = useNavigate();
  return (
    <Carousel
      sx={{
        width: { xs: "100%", md: "80%" },
        margin: "0 auto",
      }}
    >
      {banners.map(({ name, Icon }) => {
        return (
          <Box
            key={name}
            height="auto"
            sx={{
              display: "grid",
              placeItems: "center",
              borderRadius: "0.5rem",
              padding: "1rem",
              background:
                "url('https://res.cloudinary.com/doo5jbomi/image/upload/v1661442940/Video%20Library/web_dev_destjb.jpg')",
              backdropFilter: "blur(3px)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "black",
            }}
          >
            <Icon size={120} />
            <Typography variant="h3">{name}</Typography>
            <Button
              variant="contained"
              sx={{ margin: "1rem" }}
              // onClick={() => navigate("/Explore")}
            >
              Explore
            </Button>
          </Box>
        );
      })}
    </Carousel>
  );
};
