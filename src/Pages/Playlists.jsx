import { Box, Button, Typography } from "@mui/material";
import { Playlist } from "../Components";
import { IoMdAdd } from "../Components/Icons";

export const Playlists = () => {
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
          <Button variant="contained" startIcon={<IoMdAdd />}>
            New Playlist
          </Button>
        </Box>
      </Box>
      <Box>
        <Playlist />
        <Playlist />
      </Box>
    </Box>
  );
};
