import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addPlaylist,
  addVideoToPlaylist,
  deleteVideoFromPlaylist,
} from "../features/PlaylistSlice";
import { isVideoInPlaylist } from "./Utils/videoFinders";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  color: "text.primary",
  border: "2px solid lightgray",
  boxShadow: 24,
  p: "1rem",
};

export const PlaylistModal = ({ video, setNestModal, nestModal }) => {
  const playlists = useSelector((store) => store.playlist.playlists);
  const [playlistName, setPlaylistName] = useState("");
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const playListManager = ({ video, playlist }) => {
    const { _id } = playlist;
    if (isVideoInPlaylist(playlist, video._id)) {
      dispatch(deleteVideoFromPlaylist({ video, _id }));
    } else {
      dispatch(addVideoToPlaylist({ video, _id }));
    }
  };

  return (
    <Modal
      hideBackdrop
      open={nestModal}
      onClose={() => setNestModal(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={style}>
        <Stack direction="column" spacing={1}>
          {pathname !== "/Playlists"
            ? playlists?.map((playlist) => {
                return (
                  <FormGroup key={playlist._id}>
                    <FormControlLabel
                      control={<Checkbox />}
                      checked={isVideoInPlaylist(playlist, video._id)}
                      label={playlist.title}
                      onChange={() => {
                        playListManager({ video, playlist });
                      }}
                    />
                  </FormGroup>
                );
              })
            : null}
        </Stack>
        <Stack spacing={1}>
          <TextField
            id="playlist"
            label="Playlist Name"
            size="small"
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              dispatch(addPlaylist(playlistName));
              setPlaylistName("");
            }}
            size="small"
            disabled={playlistName === ""}
          >
            Create Playlist
          </Button>
          <Button
            variant="contained"
            onClick={() => setNestModal(false)}
            size="small"
          >
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
