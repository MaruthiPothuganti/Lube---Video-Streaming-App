import { IconButton, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import { MdOutlineMoreVert } from "./Icons";
import { modalOpen } from "../features/PlaylistSlice";
import { PlaylistModal } from "./PlaylistModal";
import { useDispatch } from "react-redux";

export const PopupMenu = ({ video }) => {
  console.log("render");
  const dispatch = useDispatch();

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            {console.log(video)}
            <IconButton aria-label="settings" {...bindTrigger(popupState)}>
              <MdOutlineMoreVert />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem
                onClick={() => {
                  dispatch(modalOpen());
                  popupState.close();
                }}
              >
                Add to Playlist
              </MenuItem>
              <MenuItem onClick={popupState.close}>Add to Watch Later</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <PlaylistModal video={video} />
    </>
  );
};
