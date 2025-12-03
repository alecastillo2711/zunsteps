"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from "@mui/material";
import { getBestResponse } from "@/app/lib/chatbotResponses";
import { SendOutlined } from "@mui/icons-material";
import { CopyAllOutlined } from "@mui/icons-material";
import { PsychologyAltOutlined } from "@mui/icons-material";
import { LibraryBooks } from "@mui/icons-material";
import { CodeOutlined } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";

export default function ChatBotSim({ responses }) {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [showTopics, setShowTopics] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    const botMsg = {
      sender: "bot",
      text: getBestResponse(input.trim()),
    };
    setChat((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 2,
        border: "1px solid #eee",
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ minHeight: 120, mb: 2, maxHeight: 470, overflowY: "auto" }}>
        {chat.length === 0 && (
          <Box>
            <Typography variant="body2" color="primary">
              CBAGENT v0.1.0
            </Typography>
            <Typography color="primary.text">
              Este es un agente de ayuda muy basico aún no soporta
              conversaciones con contexto ni razonamiento profundo. Temas de los
              que se puede conversar con el agente:
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Tooltip title="SUITE ZUN">
                <LibraryBooks sx={{ color: "primary.text" }} />
              </Tooltip>
              <Tooltip title="scripts utilitarios">
                <CodeOutlined sx={{ color: "primary.text" }} />
              </Tooltip>
              <Tooltip title="sql utiles">
                <Settings sx={{ color: "primary.text" }} />
              </Tooltip>
            </Box>
          </Box>
        )}
        {chat.map((msg, idx) => (
          <Box
            key={idx}
            sx={{ textAlign: msg.sender === "user" ? "right" : "left", mb: 1 }}
          >
            <Typography
              variant="body1"
              sx={{
                display: "inline-block",
                px: 2,
                py: 1,
                borderRadius: 4,
                bgcolor: msg.sender === "user" ? "primary.blue" : "grey.100",
                color:
                  msg.sender === "user"
                    ? "primary.contrastText"
                    : "text.primary",
                maxWidth: "80%",
              }}
            >
              {msg.text}
            </Typography>
            {msg.sender === "bot" && (
              <Box sx={{ marginTop: "5px", display: "flex" }}>
                <IconButton sx={{ fontSize: "50px" }}>
                  <CopyAllOutlined />
                </IconButton>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Input
          sx={{ width: "80%", height: "auto" }}
          type="text"
          value={input && input.toLowerCase()}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
            backgroundColor: "background.antiflash",
            ":hover": {
              backgroundColor: "background.green",
              color: "primary.main",
            },
          }}
          onClick={handleSend}
        >
          <SendOutlined />
        </Button>
      </Box>
    </Box>
  );
}

ChatBotSim.propTypes = {
  responses: PropTypes.object.isRequired,
};
