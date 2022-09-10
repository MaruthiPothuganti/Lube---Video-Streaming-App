import { IconButton, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import { MdOutlineMoreVert } from "./Icons";
import { PlaylistModal } from "./PlaylistModal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const PopupMenu = ({ video }) => {
  const [nestModal, setNestModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <IconButton aria-label="settings" {...bindTrigger(popupState)}>
              <MdOutlineMoreVert />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem
                onClick={() => {
                  setNestModal(true);
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
      <PlaylistModal
        video={video}
        nestModal={nestModal}
        setNestModal={setNestModal}
      />
    </>
  );
};
