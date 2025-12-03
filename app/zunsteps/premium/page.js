// app/zunsteps/premium/page.js
"use client";
import React from "react";
import { Box, Container, Typography, Button, Card } from "@mui/material";
import PremiumTabs from "@/app/components/ui/PremiumTaps";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function PremiumPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Zona Premium
        </Typography>
        <Typography variant="subtitle1">
          ¡Bienvenido a tu área exclusiva!
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Beneficios de ser Premium
        </Typography>
        <ul>
          <li>
            <Typography>Acceso a contenido exclusivo</Typography>
          </li>
          <li>
            <Typography>Soporte prioritario</Typography>
          </li>
          <li>
            <Typography>Acceso a utilitarios exclusivos</Typography>
          </li>
          <li>
            <Typography>Agente de ayuda para responder FAQs</Typography>
          </li>
        </ul>
      </Box>

      <Box mb={4}>
        <Typography
          sx={{ display: "flex", gap: "1%" }}
          variant="h5"
          gutterBottom
        >
          Contenido Exclusivo
          <VerifiedIcon sx={{ color: "blue" }} />
        </Typography>
        <PremiumTabs />
      </Box>
      <Box textAlign="center" color="text.secondary" mt={6}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Zunsteps Premium
        </Typography>
      </Box>
    </Container>
  );
}
