"use client";
import BasicTabs from "@/app/components/ui/BasicTaps";
import { SideBtnItem } from "@/app/components/ui/SideBtnItem";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { DefaultButton } from "@/app/components/ui/DefaultButton";

export default function Dashboard(params) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "30px" }}>
      <Box>
        <Card
          sx={{
            minWidth: "300px",
            height: "85vh",
            marginTop: "40px",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: "30px",
            }}
          >
            <AppsOutlinedIcon />
            <Typography
              variant="h5"
              color="primary.main"
              fontFamily={"monospace"}
            >
              Módulos
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <SideBtnItem title={"ZUNacc"} />
            <SideBtnItem title={"ZUNpms"} />
            <SideBtnItem title={"ZUNst"} />
            <SideBtnItem title={"ZUNhr"} />
            <SideBtnItem title={"ZUNpr"} />
            <SideBtnItem title={"ZUNcc"} />
            <SideBtnItem title={"ZUNaft"} />
            <SideBtnItem title={"ZUNut"} />

            <Box>
              <DefaultButton text={"Frecuentes"} />
            </Box>
          </Box>
        </Card>
      </Box>
      <Box>
        <BasicTabs />
      </Box>
    </Box>
  );
}
