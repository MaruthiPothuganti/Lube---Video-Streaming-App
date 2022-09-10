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
  modalClose,
  addPlaylist,
  addVideoToPlaylist,
} from "../features/PlaylistSlice";
import { isVideoInPlaylist } from "./Utils/videoFinders";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid lightgray",
  boxShadow: 24,
  p: "1rem",
};

export const PlaylistModal = ({ video }) => {
  console.log(video);
  const playlists = useSelector((store) => store.playlist.playlists);
  const [playlistName, setPlaylistName] = useState("");
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((store) => store.playlist);
  const { pathname } = useLocation();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalOpen}
      onClose={() => dispatch(modalClose())}
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
                const { _id } = playlist;
                return (
                  <FormGroup key={playlist._id}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={playlist.title}
                      onChange={() => {
                        dispatch(addVideoToPlaylist({ video, _id }));
                        console.log(video, _id);
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
        </Stack>
      </Box>
    </Modal>
  );
};
