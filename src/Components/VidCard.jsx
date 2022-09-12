import {
  Avatar,
  Card,
  CardMedia,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { MdOutlineMoreVert } from "./Icons";
import { PopupMenu } from "./PopupMenu";
import { Link } from "react-router-dom";

export const VidCard = ({ video, playlist }) => {
  const [isDotMenuOpen, setIsDotMenuOpen] = useState(false);

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 300,
        minWidth: 250,
        border: "1px solid #f3e5f5",
      }}
    >
      <Link to={`/${video._id}`}>
        <CardMedia
          component="img"
          height="168"
          image={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
          alt={video.title}
          sx={{
            objectFit: "contain",
            ":hover": { cursor: "pointer" },
          }}
        />
      </Link>
      <Box padding={1.5} sx={{ display: "flex" }}>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="Video">
          {video.creator.charAt(0)}
        </Avatar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            padding: "0 0.5rem",
          }}
        >
          <Box>
            <Typography variant="body2">{video.title}</Typography>
            <Typography variant="subtitle2">{video.createdAt}</Typography>
          </Box>
          <Box>
            <IconButton
              aria-label="settings"
              onClick={() => {
                setIsDotMenuOpen((prev) => !prev);
              }}
              style={{
                ":hover": { cursor: "pointer" },
              }}
            >
              <MdOutlineMoreVert />
            </IconButton>
            {isDotMenuOpen && (
              <PopupMenu
                video={video}
                playlist={playlist}
                setIsDotMenuOpen={setIsDotMenuOpen}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
