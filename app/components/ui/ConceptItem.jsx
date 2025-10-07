"use client";

import { Card, Typography } from "@mui/material";
import ResponsiveDialog from "./ResponsiveDialog";

export const ConceptItem = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      <Typography variant="h6" color="primary.text">
        Concepto
      </Typography>
      <ResponsiveDialog importat={false} title={"Detalle del Concepto 1"} />
    </Card>
  );
};
