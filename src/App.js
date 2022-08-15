import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { ThemeProvider, Box, Stack, createTheme } from "@mui/material";
import { theme } from "./theme";
import { SideNav } from "./Components";
import { HomePage, Explore, Playlists, LikedVideos, WatchLater } from "./Pages";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
    breakpoints: {
      values: {
        xs: 0,
        md: 768,
        lg: 1536,
      },
    },
  });
  const darkThemer = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} setMode={setMode} />
          <Stack direction="row">
            <SideNav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Explore" element={<Explore />} />
              <Route path="/Playlists" element={<Playlists />} />
              <Route path="/LikedVideos" element={<LikedVideos />} />
              <Route path="/WatchLater" element={<WatchLater />} />
            </Routes>
          </Stack>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
