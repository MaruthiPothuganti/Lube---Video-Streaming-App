import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { ThemeProvider, Box, Stack } from "@mui/material";
import { theme } from "./theme";
import { SideNav } from "./Components";
import { HomePage } from "./Pages/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box>
          <Navbar />
          <Stack direction="row">
            <SideNav />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Stack>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
