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

export default function Home() {
  const theme = useTheme();
  return (
    <Card className="front-card">
      <Box sx={{ marginTop: "100px" }}>
        <Typography color="primary" variant="h3" fontFamily={"monospace"}>
          ZUNSteps
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
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
        sx={{
          display: "flex",
          gap: "15px",
          marginTop: "10px",
          color: "primary.main",
        }}
      >
        <Link href={"facebook"}>
          <FacebookOutlined />
        </Link>
        <Link href={"github"}>
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
        <Link href={"/zunsteps/docs"}>
          <WhiteMiddButton text={"docs"} />
        </Link>
        <Link href={"zunsteps/dashboard"}>
          <DefaultButton
            text={"iniciar"}
            actionFunction={console.log("pronado default btn")}
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "130px",
        }}
      >
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
