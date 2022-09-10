import { Box, Typography, IconButton } from "@mui/material";
import { VidCard } from "./VidCard";
import { AiOutlineDelete } from "./Icons";
import { deletePlaylist } from "../features/PlaylistSlice";
import { useDispatch } from "react-redux";

export const Playlist = ({ playlist }) => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">{playlist.title.toUpperCase()}</Typography>
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(deletePlaylist(playlist))}
        >
          <AiOutlineDelete />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        {playlist.videos.map((video) => {
          return <VidCard key={video._id} video={video} playlist={playlist} />;
        })}
      </Box>
    </Box>
  );
};
