import { IconButton, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import { MdOutlineMoreVert } from "./Icons";
import { PlaylistModal } from "./PlaylistModal";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteVideoFromPlaylist } from "../features/PlaylistSlice";

export const PopupMenu = ({ video, playlist }) => {
  const [nestModal, setNestModal] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <IconButton aria-label="settings" {...bindTrigger(popupState)}>
              <MdOutlineMoreVert />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              {pathname !== "/Playlists" && (
                <MenuItem
                  onClick={() => {
                    setNestModal(true);
                    popupState.close();
                  }}
                >
                  Add to Playlist
                </MenuItem>
              )}
              {pathname === "/Playlists" ? (
                <MenuItem
                  onClick={() => {
                    const { _id } = playlist;
                    dispatch(deleteVideoFromPlaylist({ video, _id }));
                    popupState.close();
                  }}
                >
                  Remove from Playlist
                </MenuItem>
              ) : null}

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
