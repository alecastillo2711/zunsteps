import { Button, Typography } from "@mui/material";

export const WhiteMiddButton = ({ text, actionFunction }) => {
  return (
    <Button
      onClick={actionFunction}
      sx={{
        width: "130px",
        backgroundColor: "background.antiflash",
        border: "1.5px,solid,#f0f0f0",
        ":hover": {
          backgroundColor: "background.main",
          border: "1.5px,solid,#2c3e50",
        },
      }}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};
