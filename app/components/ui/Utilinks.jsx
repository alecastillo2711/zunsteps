"use client";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Link as MuiLink,
} from "@mui/material";

/**
 * Utilinks
 * Componente genérico para mostrar una lista de enlaces.
 * - Responsive y basado en Material UI
 *
 */
export default function Utilinks({ links }) {
  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <List disablePadding>
        {links.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton component="div" sx={{ px: 0 }}>
              <MuiLink
                href={item.url}
                underline="none"
                sx={{
                  width: "100%",
                  padding: "2%",
                  color: "primary.blue",
                  display: "flex",
                }}
              >
                {item.name}:{"  "}
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "4px", color: "primary.text" }}
                >
                  {item.description}
                </Typography>
              </MuiLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
