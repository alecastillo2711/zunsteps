export const validateKey = (tryKey) => {
  const KEY_ADMIN = "Manager*25";
  //Compruebo que las keys coincidan
  if (tryKey === KEY_ADMIN) {
    console.log("key correcta");
    return true;
  } else {
    console.log("key incorrecta");
    return false;
  }
};
