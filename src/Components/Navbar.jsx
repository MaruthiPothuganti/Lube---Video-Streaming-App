import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, BsSun, BsMoonFill } from "./Icons";
import { MenuListItems } from "./MenuListItems";

export const Navbar = ({ mode, setMode }) => {
  const [state, setState] = useState({ top: false });
  const toggleDrawer = (open) => {
    setState({ top: open });
  };

  const list = () => (
    <Box
      sx={{
        width: "auto",
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <MenuListItems />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, borderBottom: "1px", borderColor: "lightgrey" }}>
      <AppBar position="static" sx={{ p: 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            color="inherit"
            sx={{
              display: { xs: "flex", md: "none" },
            }}
            onClick={() => {
              toggleDrawer(true);
            }}
          >
            <IoMdMenu size={34} />
          </IconButton>
          <Drawer
            anchor="top"
            open={state["top"]}
            onClose={() => toggleDrawer(false)}
          >
            {list("top")}
          </Drawer>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            LUBE
          </Typography>
          <IconButton aria-label="theme" onClick={() => setMode(!mode)}>
            {mode ? <BsMoonFill /> : <BsSun />}
          </IconButton>
          <Link to="/Auth">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
