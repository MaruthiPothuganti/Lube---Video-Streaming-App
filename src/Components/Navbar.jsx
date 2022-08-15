import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu, BsSun, BsMoonFill } from "./Icons";
import { routes } from "./Utils/routes";

export const Navbar = ({ mode, setMode }) => {
  const [state, setState] = useState({ top: false });

  const toggleDrawer = (open) => {
    setState({ top: open });
  };
  const navigate = useNavigate();
  const location = useLocation();

  const list = () => (
    <Box
      sx={{
        width: "auto",
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List sx={{ padding: "1rem" }}>
        {routes.map((routeEl) => (
          <ListItem
            key={routeEl.pathName}
            disablePadding
            sx={{
              backgroundColor:
                location.pathname === routeEl.pathToGo
                  ? "lightgray"
                  : "inherit",
              borderRadius: "0.5rem",
            }}
          >
            <ListItemButton
              color="inherit"
              onClick={() => navigate(routeEl.pathToGo)}
            >
              <routeEl.icon size={24} />
              <Typography variant="h6" color="initial" marginLeft={2}>
                {routeEl.pathName}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
