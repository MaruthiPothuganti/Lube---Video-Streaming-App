import { Box, Button, Typography } from "@mui/material";
import { Playlist, PlaylistModal } from "../Components";
import { IoMdAdd } from "../Components/Icons";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../features/PlaylistSlice";

export const Playlists = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((store) => store.playlist.playlists);
  console.log(playlists);
  return (
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
            2
          </Typography>
          <Typography variant="h2" component="p" color="inherit">
            Playlists
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            startIcon={<IoMdAdd />}
            onClick={() => dispatch(modalOpen())}
          >
            New Playlist
          </Button>
          <PlaylistModal />
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
  );
};
