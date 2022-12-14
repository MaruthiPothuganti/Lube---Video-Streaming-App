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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdMenu, BsSun, BsMoonFill, CgProfile } from "./Icons";
import { MenuListItems } from "./MenuListItems";

export const Navbar = ({ mode, setMode }) => {
  const [state, setState] = useState({ top: false });
  const token = useSelector((state) => state?.login?.token);
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
          {token ? (
            <Link to="/Profile">
              <IconButton>
                <CgProfile size={32} />
              </IconButton>
            </Link>
          ) : (
            <Link to="/Auth">
              <IconButton>
                <CgProfile size={32} />
              </IconButton>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
