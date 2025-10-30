"use Client";
import {
  ArrowCircleRightOutlined,
  Title,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Button, Box } from "@mui/material";
import { useState } from "react";

export const SideBtnItem = ({ title, icon, handleModulo, marked }) => {
  const [selected, setSelected] = useState(marked);

  //Manejo del que el boton salga marcado
  const handleSelected = () => {
    setSelected(!selected);
    console.log(selected);
  };

  return (
    <Box>
      {selected ? (
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
