"use client";

import { Box, IconButton, Tooltip } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export const PaginatorDots = ({ handlePaging, dots, showNext }) => {
  return (
    <Box sx={{ marginLeft: "550px", marginTop: "10px" }}>
      <Tooltip title="Siguientes">
        {showNext ? (
          <IconButton onClick={handlePaging}>
            <ArrowForwardIosOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handlePaging}>
            <ArrowBackIosNewOutlinedIcon />
          </IconButton>
        )}
      </Tooltip>
    </Box>
  );
};
