export const zunacc = {
  mNombre: "ZUNacc Contabilidad",
  mImage: "/acc",
  mResumen:
    "El sistema trabaja con el concepto de ejercicio que habitualmente se utiliza en la Contabilidad, un espacio de tiempo que generalmente coincide con el año fiscal. El ejercicio se divide en períodos contables, generalmente los meses, aunque el sistema permite otros tipos de períodos. Dentro de un ejercicio puede haber hasta 98 períodos definidos por el usuario, más dos obligatorios: apertura y cierre de ejercicio. Dentro del módulo se trabaja normalmente con todos los ejercicios definidos. Los ejercicios anteriores al actual sólo podrán ser accedidos para obtener información, en ningún caso se permite contabilizar o cambiar los datos relativos a un ejercicio anterior.",
  mSecciones: [
    {
      id: 1,
      sNombre: "Registro",
      acciones: [
        {
          id: 1,
          aNombre: "Edicion de Comprobantes",
          pasos: ["Paso1", "Paso2", "Paso3"],
        },
      ],
    },
    {
      id: 2,
      sNombre: "Estados Financieros",
      acciones: [
        {
          id: 2,
          aNombre: "Balance General",
          pasos: ["Paso1", "Paso2", "Paso3"],
        },
      ],
    },
    {
      id: 3,
      sNombre: "Cobros y Pagos",
      acciones: [
        {
          id: 2,
          aNombre: "Cobros",
          pasos: ["Paso1", "Paso2", "Paso3"],
        },
      ],
    },
    {
      id: 4,
      sNombre: "Otras Operaciones",
      acciones: [
        {
          id: 2,
          aNombre: "Balance General",
          pasos: ["Paso1", "Paso2", "Paso3"],
        },
      ],
    },
    {
      id: 5,
      sNombre: "Una mas",
      acciones: [
        {
          id: 2,
          aNombre: "Balance General",
          pasos: ["Paso1", "Paso2", "Paso3"],
        },
      ],
    },
  ],
};
