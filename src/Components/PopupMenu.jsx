import { IconButton, Menu, MenuItem } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React, { useState } from "react";
import { MdOutlineMoreVert } from "./Icons";
import { PlaylistModal } from "./PlaylistModal";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteVideoFromPlaylist } from "../features/PlaylistSlice";
import { isVideoInWatchLater } from "./Utils/videoFinders";
import {
  addToWatchLater,
  deleteVideoFromWatchLater,
} from "../features/WatchLaterSlice";

export const PopupMenu = ({
  video,
  playlist,
  isDotMenuOpen,
  setIsDotMenuOpen,
}) => {
  const [nestModal, setNestModal] = useState(false);
  const watchlaterList = useSelector((store) => store.watchlater.watchLater);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const videoCheck = isVideoInWatchLater(watchlaterList, video._id);
  console.log(videoCheck);

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
              <MenuItem
                onClick={() => {
                  dispatch(addToWatchLater(video));
                  popupState.close();
                }}
              >
                Add to Watch Later
              </MenuItem>
              {/* {videoCheck ? (
                <MenuItem
                  onClick={() => {
                    dispatch(addToWatchLater(video));
                    popupState.close();
                  }}
                >
                  Add to Watch Later
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    dispatch(deleteVideoFromWatchLater(video));
                    popupState.close();
                  }}
                >
                  Remove from WatchLater
                </MenuItem>
              )} */}
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
