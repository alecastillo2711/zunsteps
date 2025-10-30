"use Client";
import {
  ArrowCircleRightOutlined,
  Title,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Button, Box } from "@mui/material";
import { useState } from "react";

export const SideBtnItem = ({ title, icon, handleModulo, marked, toMark }) => {
  //Manejo del que el boton salga marcado
  const handleSelected = () => {
    toMark();
  };

  return (
    <Box>
      {marked ? (
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            width: "200px",
            gap: "10px",
            color: "primary.text",
          }}
          onClick={() => {
            handleModulo();
            handleSelected();
          }}
        >
          {icon}
          {title}
        </Button>
      ) : (
        <Button
          sx={{
            display: "flex",
            width: "300px",
            gap: "10px",
            color: "primary.text",
          }}
          onClick={() => {
            handleModulo();
            handleSelected();
          }}
        >
          {icon}
          {title}
        </Button>
      )}
    </Box>
  );
};
