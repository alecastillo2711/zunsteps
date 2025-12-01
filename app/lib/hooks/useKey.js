"use client";

import { useState } from "react";

export const useKey = (tryKey) => {
  const [res, setRes] = useState({ open: false, mess: "No Match key" });
  const KEY_ADMIN = "Manager*25";
  //Compruebo que las keys coincidan
  if (tryKey === KEY_ADMIN) {
    res.open = true;
    res.mess = "Key Match!";
    return res;
  }
  return res;
};
