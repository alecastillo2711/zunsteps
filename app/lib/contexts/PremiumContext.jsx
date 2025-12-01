"use client";

import { createContext, useState } from "react";

export const PremiumContext = createContext();

export const PremiumProvider = ({ children }) => {
  const [renderPremium, setRenderPremium] = useState(false);

  const activatePremium = () => {
    setRenderPremium(true);
  };

  const deactivatePremium = () => {
    setRenderPremium(false);
  };

  const values = {
    renderPremium,
    activatePremium,
    deactivatePremium,
  };

  return (
    <PremiumContext.Provider value={values}>{children}</PremiumContext.Provider>
  );
};
