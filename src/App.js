import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Components";
import { ThemeProvider, Box, Stack, createTheme } from "@mui/material";
import { SideNav } from "./Components";
import {
  HomePage,
  Explore,
  Playlists,
  LikedVideos,
  WatchLater,
  Login,
  SignUp,
  Auth,
} from "./Pages";
import { useState } from "react";

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
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Playlists" element={<Playlists />} />
            <Route path="/LikedVideos" element={<LikedVideos />} />
            <Route path="/WatchLater" element={<WatchLater />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
