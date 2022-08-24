import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { red } from "@mui/material/colors";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import { MdOutlineMoreVert } from "./Icons";

export const VideoCard = () => {
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
        height="194"
        image={`https://img.youtube.com/vi/MqXjqOy-TA8/mqdefault.jpg`}
        //   image={`https://img.youtube.com/vi/${_id}/mqdefault.jpg`}
        alt="Paella dish"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Video">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)]}
          </Avatar>
        }
        action={
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
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
  );
};
