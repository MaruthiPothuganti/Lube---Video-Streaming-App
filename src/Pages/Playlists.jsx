import { Box, Button, Typography } from "@mui/material";
import { Playlist, PlaylistModal } from "../Components";
import { IoMdAdd } from "../Components/Icons";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Playlists = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const playlists = useSelector((store) => store.playlist.playlists);

  return (
    <>
      <Box
        flex={1}
        sx={{
          height: "calc(100vh - 64px)",
          padding: "1rem",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#c9bab9",
            padding: "0.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography variant="h2" component="p" color="#1976d2">
              {playlists ? playlists.length : 0}
            </Typography>
            <Typography variant="h2" component="p" color="inherit">
              Playlists
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              startIcon={<IoMdAdd />}
              onClick={() => setModalStatus(true)}
            >
              New Playlist
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {playlists?.map((playlist) => {
            return <Playlist key={playlist._id} playlist={playlist} />;
          })}
        </Box>
      </Box>
      <PlaylistModal nestModal={modalStatus} setNestModal={setModalStatus} />
    </>
  );
};
