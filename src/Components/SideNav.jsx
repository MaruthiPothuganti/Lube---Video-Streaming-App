import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { routes } from "./Utils/routes";

export const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "200px",
        display: { xs: "none", md: "flex" },
      }}
      role="presentation"
      borderRight={1}
      borderColor="#f3e5f5"
    >
      <List
        sx={{
          width: "100%",
          padding: "1rem",
        }}
      >
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
            <ListItemButton onClick={() => navigate(routeEl.pathToGo)}>
              <routeEl.icon size={24} />
              <Typography variant="p" marginLeft={2}>
                {routeEl.pathName}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
