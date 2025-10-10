"use client";

import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, Input } from "@mui/material";
import { useState } from "react";

export const Searcher = ({ collection, searchFunction, resetFunction }) => {
  const [item, setItem] = useState("");

  return (
    <Box sx={{ display: "flex", gap: "10px", padding: "10px", height: "56px" }}>
      <Input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Buscar..."
        value={item}
      >
        {item}
      </Input>
      <Button
        onClick={() => searchFunction(item, collection)}
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
      <Button onClick={resetFunction}>reset</Button>
    </Box>
  );
};
