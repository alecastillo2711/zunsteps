"use client";

import { Card, Typography } from "@mui/material";
import ResponsiveDialog from "./ResponsiveDialog";
import VerticalLinearStepper from "./VerticalLinearStepper";

export const ConceptItem = ({ accion }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        marginTop: "5px",
        marginBottom: "5px",
        ":hover": {
          transition: "250ms",
          backgroundColor: "background.green",
        },
      }}
    >
      <Typography variant="h6" color="primary.text">
        {accion.aNombre}
      </Typography>
      <ResponsiveDialog
        rAccion={accion.aResumen}
        nAccion={accion.aNombre}
        importat={false}
        title={"Detalles"}
        content={<VerticalLinearStepper steps={accion.pasos} />}
      />
    </Card>
  );
};
