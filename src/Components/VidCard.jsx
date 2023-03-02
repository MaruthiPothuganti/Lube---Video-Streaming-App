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

  const truncateText = (text) => {
    if (text.length <= 30) {
      return text;
    } else {
      return text.slice(0, 30) + "...";
    }
  };

  return (
    <Card
      sx={{
        position: "relative",
        border: "1px solid #f3e5f5",
      }}
    >
      <Link to={`/${video._id}`}>
        <CardMedia
          component="img"
          height="auto"
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
            <Typography variant="body2" title={video.title}>
              {truncateText(video.title)}
            </Typography>
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
