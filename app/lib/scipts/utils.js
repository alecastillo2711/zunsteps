export const resetGet = {
  id: 1,
  name: "Reset Password",
  description:
    "Este script reinicia la contraseña del operador get a una contraseña predeterminada (Root2020).",
  code: "update operador set password = 'E63861044767D6E16A11E1BEB9B725DA72BD40C7' where nombre = 'get'",
};
export const clearStock = {
  id: 2,
  name: "Limpiar BD Stock",
  description: "Con este script se puede limpiar la base de datos de ZUNstock.",
  code: `delete from ALMTRACR
delete from ALMCOMCD
delete from ALMCOMPC

delete from ALMINVED
delete from ALMINVEL
delete from ALMTRAIR
delete from ALMINVEC

delete from ALMPEDSD
delete from ALMPEDSl
delete from ALMPEDSC

delete from ALMMOVID
delete from ALMMOVIL
delete from ALMTRATR
delete from ALMMOVIC`,
};
