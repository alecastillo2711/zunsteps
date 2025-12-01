"use client";
import { Box, Card, Divider, Typography, useTheme } from "@mui/material";
import "./styles/front.css";
import Link from "next/link";
import {
  FacebookOutlined,
  GitHub,
  LinkedIn,
  WhatsApp,
  X,
} from "@mui/icons-material";
import { DefaultButton } from "./components/ui/DefaultButton";
import { WhiteMiddButton } from "./components/ui/WhiteMiddButton";
import Image from "next/image";
import { KeyOutlined } from "@mui/icons-material";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Home() {
  const theme = useTheme();
  return (
    <Card className="front-card">
      <Box className="box-app-name">
        <Typography color="primary" variant="h3" fontFamily={"monospace"}>
          ZUNSteps
        </Typography>
      </Box>
      <Box className="box-promo-txt">
        <Typography color="primary.text">
          La herramienta que facilita el trabajo con la
        </Typography>
        <Typography sx={{ marginLeft: "25px" }} color="primary.text">
          Suite ZUN. No pierdas la oprtunidad de:
        </Typography>
        <Typography sx={{ color: "primary.text" }}>
          {" "}
          aprender haciendo.
        </Typography>
      </Box>
      <Box
        className="box-social"
        sx={{
          color: "primary.main",
        }}
      >
        <Link href={"facebook"}>
          <FacebookOutlined />
        </Link>
        <Link href={"https://github.com/carlosjbm/"}>
          <GitHub />
        </Link>
        <Link href={"twitter"}>
          <X />
        </Link>
        <Link href={"linkedin"}>
          <LinkedIn />
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: "10px", marginTop: "50px" }}>
        <Link href={"/admin"}>
          <WhiteMiddButton text={"premium"} icon={<VerifiedIcon />} />
        </Link>
        <Link href={"zunsteps/dashboard"}>
          <DefaultButton
            text={"iniciar"}
            actionFunction={console.log("pronado default btn")}
          />
        </Link>
      </Box>

      <Box className="box-contact">
        <Typography color="primary.text">
          Powered by Carlinhos. v1.0.0
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "primary.main",
          }}
        >
          <span>
            <WhatsApp />
          </span>
          +53 63907157
        </Box>
      </Box>
    </Card>
  );
}
