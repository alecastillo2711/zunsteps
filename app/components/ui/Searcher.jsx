"use client";

import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, Input } from "@mui/material";

export const Searcher = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px", padding: "10px", height: "56px" }}>
      <Input type="text" placeholder="Buscar..."></Input>
      <Button
        sx={{
          backgroundColor: "background.green",
          ":hover": {
            color: "primary.main",
            backgroundColor: "background.main",
            border: "1.5px,solid,#2c3e50",
            transition: "200ms",
          },
        }}
      >
        <SearchOutlined />
      </Button>
    </Box>
  );
};
