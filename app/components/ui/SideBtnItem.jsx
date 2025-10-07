"use Client";
import {
  ArrowCircleRightOutlined,
  Title,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Button, Box } from "@mui/material";
import { useState } from "react";

export const SideBtnItem = ({ title, icon }) => {
  const [selected, setSelected] = useState(true);

  const handleSelected = () => {
    setSelected(!selected);
  };
  return (
    <Box>
      <Button
        sx={{
          display: "flex",
          width: "300px",
          gap: "10px",
          color: "primary.text",
        }}
        onClick={handleSelected}
      >
        {title}
        {icon}
      </Button>
    </Box>
  );
};
