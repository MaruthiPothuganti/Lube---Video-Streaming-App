import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { PlaylistModal } from "./PlaylistModal";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteVideoFromPlaylist } from "../features/PlaylistSlice";
import { isVideoInWatchLater } from "./Utils/videoFinders";
import {
  addToWatchLater,
  deleteVideoFromWatchLater,
} from "../features/WatchLaterSlice";

export const PopupMenu = ({ video, playlist, setIsDotMenuOpen }) => {
  const [nestModal, setNestModal] = useState(false);
  const watchlaterList = useSelector((store) => store.watchlater.watchLater);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const videoCheck = isVideoInWatchLater(watchlaterList, video._id);

  return (
    <>
      <Paper
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          width: "80%",
          transform: "translate(-50%, -50%)",
          padding: "1rem",
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {pathname === "/Explore" && (
          <>
            <Button
              variant="text"
              onClick={() => {
                setNestModal(true);
              }}
            >
              Add to Playlist
            </Button>
            {videoCheck ? (
              <Button
                variant="text"
                onClick={() => {
                  dispatch(deleteVideoFromWatchLater(video));
                  setIsDotMenuOpen(false);
                }}
              >
                Remove From WatchLater
              </Button>
            ) : (
              <Button
                variant="text"
                onClick={() => {
                  dispatch(addToWatchLater(video));
                  setIsDotMenuOpen(false);
                }}
              >
                Add to Watchlater
              </Button>
            )}
          </>
        )}

        {pathname === "/Playlists" && (
          <Button
            variant="text"
            onClick={() => {
              const { _id } = playlist;
              dispatch(deleteVideoFromPlaylist({ video, _id }));
            }}
          >
            Remove from Playlist
          </Button>
        )}

        {pathname === "/WatchLater" && (
          <Button
            variant="text"
            onClick={() => {
              dispatch(deleteVideoFromWatchLater(video));
            }}
          >
            Remove From WatchLater
          </Button>
        )}
      </Paper>
      <PlaylistModal
        video={video}
        nestModal={nestModal}
        setNestModal={setNestModal}
        setIsDotMenuOpen={setIsDotMenuOpen}
      />
    </>
  );
};
