"use client";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Typography, List, ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";

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
        bgcolor: "background.paper",
        borderRadius: 1,
        margin: 1,
        display: "flex",
      }}
    >
      <List disablePadding>
        {links.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton component="div" sx={{ padding: "3%" }}>
              <Link target="_blank" href={item.url}>
                <Typography variant="h6" color="blue">
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "4px", color: "primary.text" }}
                >
                  {item.description}
                </Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
