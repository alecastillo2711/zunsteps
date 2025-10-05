"use client";

const { myTheme } = require("@/app/lib/myTheme");
const { ThemeProvider } = require("@emotion/react");

export function MyThemeProvider({ children }) {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
}
