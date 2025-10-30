// LoadingSpinner.js
import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5" // fondo gris claro
    >
      <CircularProgress
        size={60}
        thickness={5}
        style={{ color: "#333" }} // gris oscuro / casi negro
      />
    </Box>
  );
};

export default LoadingSpinner;
