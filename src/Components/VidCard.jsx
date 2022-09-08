import {
  Avatar,
  Card,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import { MdOutlineMoreVert } from "./Icons";
import { PlaylistModal } from "./PlaylistModal";

export const VidCard = ({ video }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 250,
        border: "1px solid #f3e5f5",
        ":hover": { cursor: "pointer" },
      }}
    >
      <CardMedia
        component="img"
        height="168"
        image={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
        alt={video.title}
        sx={{
          objectFit: "contain",
        }}
      />
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
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <IconButton aria-label="settings" {...bindTrigger(popupState)}>
                  <MdOutlineMoreVert />
                </IconButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    Add to Playlist
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Add to Watch Later
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Box>
      </Box>
      <PlaylistModal video={video} />
    </Card>
  );
};
