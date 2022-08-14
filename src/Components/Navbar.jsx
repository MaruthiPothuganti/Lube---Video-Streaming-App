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
  Divider,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const Navbar = () => {
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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <MenuIcon />
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
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
            <MenuIcon />
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
