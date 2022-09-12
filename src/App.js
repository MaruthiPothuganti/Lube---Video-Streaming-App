import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Components";
import { ThemeProvider, Box, Stack, createTheme } from "@mui/material";
import { SideNav, RequireAuth } from "./Components";
import {
  HomePage,
  Explore,
  Playlists,
  LikedVideos,
  WatchLater,
  Auth,
  Profile, SingleVideoPage
} from "./Pages";
import { useState } from "react";
import MockmanEs from "mockman-js";

const App = () => {
  const [mode, setMode] = useState(true);
  const location = useLocation();

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

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} setMode={setMode} />
        <Stack direction="row">
          {location.pathname !== "/" ? <SideNav /> : null}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Explore" element={<RequireAuth><Explore /></RequireAuth>} />
            <Route path="/Playlists" element={<RequireAuth><Playlists /></RequireAuth>} />
            <Route path="/LikedVideos" element={<RequireAuth><LikedVideos /></RequireAuth>} />
            <Route path="/WatchLater" element={<RequireAuth><WatchLater /></RequireAuth>} />
            <Route path="/Profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/:videoId" element={<SingleVideoPage />} />
             <Route path="/mock" element={<MockmanEs />} />

          </Routes>
        </Stack>
      </Box>

    </ThemeProvider>
  );
};

export default App;
