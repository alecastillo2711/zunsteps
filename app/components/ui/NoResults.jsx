"use client";

import { Error } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";

export const NoResults = () => {
  return (
    <Card
      sx={{
        display: "flex",
        color: "primary.red",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Error />
      <Typography>No se encontraron coincidencias!</Typography>
    </Card>
  );
};
