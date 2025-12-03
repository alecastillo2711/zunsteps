"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { getBestResponse } from "@/app/lib/chatbotResponses";

export default function ChatBotSim({ responses }) {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

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
      <Box sx={{ minHeight: 120, mb: 2 }}>
        {chat.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            Escribe una pregunta para recibir ayuda.
          </Typography>
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
                borderRadius: 2,
                bgcolor: msg.sender === "user" ? "primary.light" : "grey.100",
                color:
                  msg.sender === "user"
                    ? "primary.contrastText"
                    : "text.primary",
                maxWidth: "80%",
              }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <input
          type="text"
          value={input && input.toLowerCase()}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            background: "#1976d2",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </Box>
    </Box>
  );
}

ChatBotSim.propTypes = {
  responses: PropTypes.object.isRequired,
};
