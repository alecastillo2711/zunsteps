import { ArrowForward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

export const DefaultButton = ({ text, actionFunction }) => {
  return (
    <Button
      onClick={actionFunction}
      sx={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        backgroundColor: "background.green",
        border: "1.5px,solid,#f0f0f0",
        ":hover": {
          color: "primary.main",
          backgroundColor: "background.main",
          border: "1.5px,solid,#2c3e50",
          transition: "200ms",
        },
      }}
    >
      <Typography>{text}</Typography>
      <ArrowForward />
    </Button>
  );
};
