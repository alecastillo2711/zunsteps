"use client";

import { zunacc } from "../modulos/zunacc";
import { zunhr } from "../modulos/zunhr";

const { createContext, useState } = require("react");

export const ModuloContext = createContext();

export const ModuloProvider = ({ children }) => {
  const [modulo, setModulo] = useState(zunacc);

  //Funcion que activa el modulo zunacc
  const setZunacc = () => {
    setModulo(zunacc);
  };
  //funcion que activa zunhr
  const setZunhr = () => {
    setModulo(zunhr); //cambiar aqui
  };

  const values = {
    modulo,
    setZunacc,
    setZunhr,
  };
  return (
    <ModuloContext.Provider value={values}>{children}</ModuloContext.Provider>
  );
};
