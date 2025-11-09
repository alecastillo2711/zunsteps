"use client";
import BasicTabs from "@/app/components/ui/BasicTaps";
import { SideBtnItem } from "@/app/components/ui/SideBtnItem";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { DefaultButton } from "@/app/components/ui/DefaultButton";
import { ScienceOutlined } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

/*Modulos */
import { ModuloContext } from "@/app/lib/contexts/ModulosContext";

export default function Dashboard(params) {
  const { modulo, setZunacc, setZunhr, setZunaft, setZunst } =
    useContext(ModuloContext);
  const [acc, setAcc] = useState(true);
  const [hr, setHr] = useState(false);
  const [aft, setAft] = useState(false);
  const [st, setSt] = useState(false);

  //Manejo de si esta marcado o no para Acc
  const handleMarkupAcc = () => {
    setAcc(true);
    setHr(false);
    setAft(false);
    setSt(false);
  };
  //Manejo de si esta marcado o no para Hr
  const handleMarkupHr = () => {
    setHr(true);
    setAcc(false);
    setAft(false);
    setSt(false);
  };
  //Manejo de si esta marcado o no para AFT
  const handleMarkupAft = () => {
    setAft(true);
    setHr(false);
    setAcc(false);
    setSt(false);
  };
  const handleMarkupSt = () => {
    setSt(true);
    setAft(false);
    setHr(false);
    setAcc(false);
  };

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
              marked={acc}
              toMark={handleMarkupAcc}
              icon={<CurrencyExchangeOutlinedIcon />}
            />
            <SideBtnItem title={"ZUNpms"} icon={<ScienceOutlined />} />
            <SideBtnItem
              marked={st}
              toMark={handleMarkupSt}
              handleModulo={setZunst}
              title={"ZUNst"}
              icon={<Inventory2OutlinedIcon />}
            />
            <SideBtnItem
              title={"ZUNhr"}
              marked={hr}
              toMark={handleMarkupHr}
              handleModulo={setZunhr}
              icon={<Diversity3OutlinedIcon />}
            />
            <SideBtnItem title={"ZUNpr"} icon={<ScienceOutlined />} />
            <SideBtnItem title={"ZUNcc"} icon={<ScienceOutlined />} />
            <SideBtnItem
              title={"ZUNaft"}
              marked={aft}
              handleModulo={setZunaft}
              toMark={handleMarkupAft}
              icon={<ChairOutlinedIcon />}
            />
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
