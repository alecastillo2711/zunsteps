export const resetGet = {
  id: 1,
  name: "Reset Password",
  description:
    "Este script reinicia la contraseña del operador get a una contraseña predeterminada (Root2020).",
  code: "update operador set password = 'E63861044767D6E16A11E1BEB9B725DA72BD40C7' where nombre = 'get'",
};
