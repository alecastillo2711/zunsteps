import { useState } from "react";

export const useCopy = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setInterval(() => setCopied(false), 6000);
    });
  };

  return [copied, copyToClipboard]; //retorno estado y funcion
};
