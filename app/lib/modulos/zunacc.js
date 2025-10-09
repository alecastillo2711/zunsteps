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
          aNombre: "Creación y Modificación de Comprobantes",
          aResumen: `La ventana que se despliega está diseñada para que tanto la creación como la edición se 
puedan realizar por el operador de la manera más ágil posible, ya que es la opción en que  
se produce la mayor interacción con el usuario.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/modificar-comprobante.png",
              description: `Dirigirse a la opcion de Comprobantes en el menu del sistema.`,
            },
            {
              label: "Que desea hacer",
              description: `Del listado de botones que aparecen en el lado derecho (*paso anterior), seleccione la que desea.`,
            },
            {
              label: "Configurar la cabecera del comprobante",
              image: "/secciones-comprobante",
              description: `Introducir todos los datos que pide el sistema, ejemplo: título, fecha o libro.`,
            },
            {
              label: "El Recuadro del Centro",
              description: `En el recuadro del centro se procede a la introducción o modificación de cada uno de los 
apuntes del comprobante.Ten en cuenta que campos como El código del Concepto, La Descripción del apunte y 
El Documento no son campos obligatorios `,
            },
            {
              label: "Funciones",
              image: "/secciones-comprobante",
              description: `Con la opción Incertar podras agregar más apuntes, con la de Borrar puedes eliminar apuntes
              y con la opción OK guardaras todos los cambios`,
            },
          ],
        },
        {
          id: 2,
          aNombre: "Reversión de Comprobantes",
          aResumen: `El objetivo de esta opción es crear un comprobante (que NO se considera automático) 
revirtiendo otro ya integrado. Debe ser considerada como una opción de ayuda al usuario 
que le evita la introducción manual del comprobante de reversión. El comprobante 
resultante queda como pendiente de integrar y por ser de tipo manual, podrá ser anulado o 
editado.`,
          pasos: [
            {
              label: "Inicio",
              image: "/reversion-comprobante",
              description: `Entrar en la opción de sistema llamada Reversion de Comprobantes Integrados`,
            },
            {
              label: "Introducir Comprobante",
              description: `Introduce en el campo que se muestra el número del comprobante que se desea revertir.`,
            },
            {
              label: "Fecha de Reversión",
              description: `Introducir la fecha de reversión o contabilización para el 
              comprobante resultante.`,
            },
            {
              label: "Revertir",
              description: `Al oprimir el botón Revertir se realizará dicha acción, mostrándose en pantalla el 
comprobante resultante en cuyo título se reflejará que constituye una reversión del 
comprobante original. El sistema asignará un nuevo número consecutivo y la pantalla 
reflejará consecuentemente dicha operación. `,
            },
          ],
        },
        {
          id: 3,
          aNombre: "Listado de Comprobantes",
          aResumen: `El objetivo de esta opción es el de listar uno o más comprobantes pendientes de integrar o 
anulados, por tanto se encontrará activa tanto si se están visualizando los comprobantes 
pendientes o los anulados. Se deberán seleccionar previamente en la lista aquellos que se 
desean listar y dar Clic en el botón. Esta opción es de libre acceso en el sistema si se tiene 
derecho a ejecutar la pantalla de comprobantes.`,
          pasos: [
            {
              label: "Inicio",
              image: "/listar-comprobante",
              description: `Entrar en la opción de sistema llamada Comprobantes Pendientes a Integrar`,
            },
            {
              label: "Cuales Mostrar?",
              image: "/listar-comprobante",
              description: `Si marcas la opción Solo mis Comprobantes, solo se mostraran los que correspondan
              a tu operador, de lo contrario se mostraran todos los componentes pendientes a integrar.
              También esta la opción de filtrar por solo pendientes o solo los anulados.`,
            },
          ],
        },
        {
          id: 4,
          aNombre: "Integracion de Comprobantes",
          pasos: ["Paso1", "Paso2", "Paso3"],
        },
        {
          id: 5,
          aNombre: "Anulacion de Comprobantes",
          pasos: ["Paso1", "Paso2", "Paso3"],
        },
        {
          id: 2,
          aNombre: "Recuperacion de Comprobantes",
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
  ],
};
