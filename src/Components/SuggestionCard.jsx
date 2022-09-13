import * as React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const SuggestionCard = ({ singleVideo }) => {
  return (
    <Link to={`/${singleVideo._id}`}>
      <Card
        sx={{
          display: "flex",
          border: "1px solid lightgrey",
          margin: "0.5rem",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 200,
            height: "auto",
            objectFit: "contain",
            ":hover": { cursor: "pointer" },
          }}
          image={`https://img.youtube.com/vi/${singleVideo._id}/mqdefault.jpg`}
          alt={singleVideo.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {singleVideo.title.length > 20
                ? singleVideo.title.slice(0, 30) + "..."
                : singleVideo.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {singleVideo.creator}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};
