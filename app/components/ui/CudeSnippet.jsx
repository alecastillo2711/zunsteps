import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useCopy } from "@/app/lib/hooks/useCopy";
import Button from "@mui/material/Button";

export default function CodeSnippet({ name, code, description }) {
  const [copied, copyToClipboard] = useCopy();
  return (
    <Card sx={{ marginTop: "2%" }}>
      <Box p={2} mb={2}>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Box p={2} sx={{ backgroundColor: "#f5f5f5", fontFamily: "monospace" }}>
        <pre>
          <code>{code}</code>
        </pre>
        <Button sx={{ margin: "1%" }} onClick={() => copyToClipboard(code)}>
          {copied ? "Copiado!" : "Copiar al portapapeles"}
        </Button>
      </Box>
    </Card>
  );
}
