import { routes } from "./Utils/routes";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography, List, ListItem, ListItemButton } from "@mui/material";

export const MenuListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
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
            <ListItemButton onClick={() => navigate(routeEl.pathToGo)}>
              <routeEl.icon size={24} />
              <Typography variant="p" marginLeft={2}>
                {routeEl.pathName}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
