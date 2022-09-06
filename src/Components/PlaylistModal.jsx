import { Backdrop, Box, Button, Modal, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../features/PlaylistSlice";

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

export const PlaylistModal = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((store) => store.playlist);

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
        <Box>
          <TextField
            id="playlist"
            label="Playlist Name"
            size="small"
            type="text"
          />
        </Box>
        <Button variant="contained" onClick={() => dispatch(modalClose())}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default Modal;
