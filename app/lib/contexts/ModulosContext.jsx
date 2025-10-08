"use client";

import { zunacc } from "../modulos/zunacc";

const { createContext, useState } = require("react");

export const ModuloContext = createContext();

export const ModuloProvider = ({ children }) => {
  const [modulo, setModulo] = useState(zunacc);

  const setZunacc = () => {
    setModulo(zunacc);
  };
  const values = {
    modulo,
    setZunacc,
  };
  return (
    <ModuloContext.Provider values={values}>{children}</ModuloContext.Provider>
  );
};
