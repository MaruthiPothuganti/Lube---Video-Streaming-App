import { Box } from "@mui/material";
import { MenuListItems } from "./MenuListItems";

export const SideNav = () => {
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
      <MenuListItems
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};
