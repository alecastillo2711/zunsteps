"use client";
import BasicTabs from "@/app/components/ui/BasicTaps";
import { SideBtnItem } from "@/app/components/ui/SideBtnItem";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { DefaultButton } from "@/app/components/ui/DefaultButton";
import { ScienceOutlined } from "@mui/icons-material";
import React, { useContext, useState } from "react";

/*Modulos */
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";

export default function Dashboard(params) {
  const { modulo, setZunacc, setZunhr } = useContext(ModuloContext);

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
            <SideBtnItem
              title={"ZUNacc"}
              handleModulo={setZunacc}
              marked={false}
            />
            <SideBtnItem title={"ZUNpms"} icon={<ScienceOutlined />} />
            <SideBtnItem title={"ZUNst"} icon={<ScienceOutlined />} />
            <SideBtnItem
              title={"ZUNhr"}
              marked={true}
              handleModulo={setZunhr}
            />
            <SideBtnItem title={"ZUNpr"} icon={<ScienceOutlined />} />
            <SideBtnItem title={"ZUNcc"} icon={<ScienceOutlined />} />
            <SideBtnItem title={"ZUNaft"} icon={<ScienceOutlined />} />
            <SideBtnItem title={"ZUNut"} icon={<ScienceOutlined />} />

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
