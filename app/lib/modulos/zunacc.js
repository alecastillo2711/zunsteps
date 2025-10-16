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
              description: `Con la opción Incertar podras agregar más apuntes, con la de Borrar puedes eliminar apuntes
              y con la opción OK guardarás todos los cambios`,
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
              description: `Entrar en la opción de sistema llamada Reversion de Comprobantes Integrados`,
            },
            {
              label: "Introducir Comprobante",
              image: "/zunacc/registro/reversion-comprobante.png",
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
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Entrar en la opción de sistema llamada Comprobantes Pendientes a Integrar`,
            },
            {
              label: "Cuales Mostrar?",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Si marcas la opción Solo mis Comprobantes, solo se mostraran los que correspondan
              a tu operador, de lo contrario se mostraran todos los componentes pendientes a integrar.
              También esta la opción de filtrar por solo pendientes o solo los anulados.`,
            },
          ],
        },
        {
          id: 4,
          aNombre: "Integración de Comprobantes Pendientes",
          aResumen: `El objetivo de esta opción es actualizar en el diario contable uno o más comprobantes 
pendientes de integrar. Es una opción que permite la ejecución sobre varios comprobantes 
que deberán seleccionarse previamente de la lista.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Entrar en la opción de sistema llamada Comprobantes Pendientes a Integrar`,
            },
            {
              label: "Integrar",
              description: `Realizar la opción de INTEGRAR, de esta manera se validarán todos los datos
              y se actualizará el Diario Contable con los Comprobantes Integrados.`,
            },
          ],
        },
        {
          id: 5,
          aNombre: "Anulación de Comprobantes Pendientes",
          aResumen: `El objetivo de esta opción es el de anular un comprobante pendiente de integrar. Esta 
operación el sistema la realiza individualmente para un comprobante, por tanto en caso de 
haber seleccionado varios de ellos en la lista, solo se considerará para anular el primero de 
dicha selección.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Seleccionar de la lista de comprobantes el que se desea anular`,
            },
            {
              label: "Realizar Anulación",
              description: `Cliquear la opción de anular comprobante`,
            },
            {
              label: "Motivo",
              image: "/zunacc/registro/motivo-anulacion.png",
              description: `Introducir en el cuadro de texto el motivo por el que se
              desea anular el comprobante en cuestión.`,
            },
          ],
        },
        {
          id: 6,
          aNombre: "Recuperación de un Comprobante Anulado",
          aResumen: `El objetivo de esta opción es recuperar un comprobante que se ha anulado previamente. 
Por tanto, se debe activar la pantalla para la visualización de los comprobantes anulados en 
el botón correspondiente. La operación de recuperación se realiza individualmente para 
cada comprobante, por tanto aunque se seleccionen varios en la lista, solo se considerará el 
primero de la selección para ejecutar la misma.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listar-comprobante.png",
              description: `Aplicar el filtro de la opción de mostrar solo los comprobantes anulados.`,
            },
            {
              label: "Selección",
              description: `De la lista de comprobantes anulados seleccionar el comprobante a recuperar.`,
            },
            {
              label: "Recuperar",
              description: ` La operación de recuperación se realiza individualmente para 
cada comprobante, por tanto aunque se seleccionen varios en la lista, solo se considerará el 
primero de la selección para ejecutar la misma. Una vez recuperado, un comprobante pasa a formar parte nuevamente de los pendientes 
de integrar.`,
            },
          ],
        },
        {
          id: 7,
          aNombre: "Listado Diario",
          aResumen: `El objetivo de este reporte es el de listar apuntes del diario contable. Este listado se realiza 
de acuerdo a criterios establecidos para casi todos los campos del diario. Los apuntes pueden listarse con la 
moneda en que fueron registrados o ser previamente convertidos a la moneda base de la 
empresa seleccionada en la Barra de Herramientas.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listado-diario.png",
              description: `Ir a la opción de Listado de Diario y llenar los campos de la parte superior,
              como son ejercicio, desde, hasta etc. `,
            },
            {
              label: "Aplicar",
              description: `Click en la opción aplicar para que se muestre la lista de diario. Cuentas con
              varias opciones de agrupación, como son: Total por Día, Total por Comprobante o la opción de
              convertir a moneda base. `,
            },
            {
              label: "*Cabe destacar*",
              description: `La casilla Convertir a Moneda Base se marcará cuando se requiere que los importes de 
todos los apuntes se muestren en el listado convertidos a la moneda base de la empresa 
según la tasa de cambio del comprobante. En caso de que se quiera el listado con los 
apuntes en su moneda original, no se marcará esta casilla. `,
            },
          ],
        },
        {
          id: 8,
          aNombre: "Extracto de Cuentas",
          aResumen: `Este listado tiene como objetivo  listar los apuntes de una cuenta durante el período dado, 
así como el saldo que tenía al iniciar el período y el total de sus movimientos en el mismo. Los apuntes pueden listarse con la moneda en que fueron registrados o ser previamente 
convertidos a la moneda base de la empresa seleccionada en la Barra de Herramientas.`,
          pasos: [
            {
              label: "Inicio",
              image: "/zunacc/registro/listado-diario.png",
              description: `Ir a la opción de Extracto de Cuentas en la barra de herramientas. `,
            },
            {
              label: "Seleccionar Cuenta",
              image: "/zunacc/registro/extracto-cuenta.png",
              description: `En el combo-box Cuenta puedes seleccionar una o varias cuentas con sus centros de costos
              de las cuales se emitirá un extracto. `,
            },
            {
              label: "Aplicar",
              description: `Clickear la opción Aplicar para que se aplique el extracto a la cuenta o cuentas seleccionadas
               `,
            },
            {
              label: "Reporte",
              description: `Clickear la opción Reporte para visualizar el reporte correspondiente
              al extracto de la cuenta.`,
            },
            {
              label: "*Consideraciones*",
              image: "/zunacc/registro/extracto-cuenta-rango.png",
              description: `Si el operador seleccionó Rango o Plantilla de cuentas, la pantalla será mostrada como 
aparece a continuación:
               `,
            },
          ],
        },
        {
          id: 9,
          aNombre: "Balance de Comprobación",
          aResumen: `Este listado tiene como objetivo obtener para cada cuenta en el período seleccionado: 
*Período
 : total de los apuntes al debe menos total de los apuntes al haber, y el saldo 
del período 
*Acumulado
 : total de los apuntes al debe menos total de los apuntes al haber, y el 
saldo acumulado hasta el período 
* Ambos
 : saldo antes del período, total de los apuntes al debe y al haber 
respectivamente, saldo del período y el saldo al final del período seleccionado `,
          pasos: [
            {
              label: "Inicio",
              // image: "/zunacc/registro/listado-diario.png",
              description: `Ir a la opción de Balance de Comprobación en la barra de herramientas. `,
            },
            {
              label: "Selecionar Período de Tiempo",
              // image: "/zunacc/registro/listado-diario.png",
              description: `Lo primero que se debe definir es el período de tiempo para el cual se desea obtener la 
información. Para esto tiene tres opciones: Todo el ejercicio, un Período o Fecha Inicial y 
Fecha Final`,
            },
            {
              label: "Selección de artículos a incluir",
              // image: "/zunacc/registro/listado-diario.png",
              description: `LLenar los campos: Empresa, Tipo de Cuenta, Cuenta y Centro de Costo o Gasto. En los dos primeros 
casos se permite la selección múltiple escogiendo en sendas listas de opciones. Para Cuenta 
se escogerá en un combo box Rango o Plantilla, y para Centro de Costo un rango.*Ten en cuenta que el campo Empresa es obligatorio*
`,
            },
            {
              label: "Seleccionar a que niveles de información se desea",
              // image: "/zunacc/registro/listado-diario.png",
              description: `Mayor,  en que sólo aparecen en el listado las cuentas de estructura de este tipo,
              Estructura, en que aparecen en el listado todas las cuentas definidas en la estructura,
              Detalle, en que aparecen en el listado todas las cuentas definidas en el plan de 
cuentas detallado y la acumulación de importes sólo será la correspondiente a los 
apuntes de cada cuenta en el período seleccionado y antes de éste
Todo, en que aparecen en el listado todas las cuentas definidas en la estructura más 
todas las definidas en el detalle, mezcladas según el código y las de detalle se 
muestran con un desplazamiento de una posición hacia la derecha. `,
            },
            {
              label: "Optener Reporte",
              // image: "/zunacc/registro/listado-diario.png",
              description: `Los botones OK y Salir ejecutan la emisión del reporte con las condiciones seleccionadas y 
la salida de la pantalla respectivamente.`,
            },
            {
              label: "Consideraciones adicionales*",
              // image: "/zunacc/registro/listado-diario.png",
              description: `El reporte puede ser Comparativo o no, en dependencia de si se marca o no el campo 
correspondiente. Cuando se marca, se permite especificar, mediante un botón de radio, si 
la comparación se realizará con el Real o con el Presupuesto.
La casilla Incluir cuentas con saldo Cero posibilita cuando está marcado que aparezcan en el 
listado las cuentas que en todas las columnas del listado tengan el valor cero. En caso 
contrario, aparecerán en el listado los datos de todas las cuentas que hayan tenido apuntes 
dentro del período solicitado.`,
            },
          ],
        },
        {
          id: 2,
          aNombre: "Traslado entre Cuentas",
          aResumen: `El objetivo de esta opción es generar un comprobante que anule todos los apuntes de una 
cuenta origen y los abra en una cuenta destino.Una vez integrado este comprobante, la cuenta origen podrá ser puesta como inactiva si se 
requiere. Esta opción nos permite realizar todas estas operaciones.`,
          pasos: [
            {
              label: "Inicio",
              // image: "/zunacc/registro/modificar-comprobante.png",
              description: `Dirigirse a la opción Traslado de apuntes entre cuentas en el menú del sistema.`,
            },
            {
              label: "Llenar campos requeridos",
              image: "/zunacc/registro/traslado-cuentas.png",
              description: `Llenar cada uno de los campos requeridos en la acción. Como son cuenta de origen, cuenta de 
              destino con sus respectivos centros de costos en caso de tenerlos.`,
            },
            {
              label: "Fecha de Contabilización",
              // image: "/zunacc/registro/modificar-comprobante.png",
              description: `se debe introducir la que debe llevar el comprobante a 
generar. Debe pertenecer a uno de los períodos vigentes del ejercicio activo. Ahora bien, en 
el comprobante generado, cada apunte de la cuenta nueva tendrá como fecha valor la del 
apunte correspondiente de la vieja y los apuntes a la cuenta vieja llevarán en este campo la 
fecha del sistema. De esta forma, no cambiará la edad de las facturas implicadas si las 
cuentas a trasladar son por pagar,  por cobrar o tarjetas de crédito.`,
            },
            {
              label: `Mantener los apuntes de apertura en el libro de Inicio de 
Ejercicio`,
              image: "/zunacc/registro/traslado-cuentas.png",
              description: `(de estar seleccionado) que si la cuenta tuvo apuntes en el 
período de apertura del ejercicio, el comprobante resultante de la operación mantendrá 
dichos apuntes en el mismo libro.`,
            },
            {
              label: "Trasladar",
              image: "/zunacc/registro/traslado-cuentas2.png",
              description: `Con el botón Trasladar se ejecuta la operación que genera los comprobantes que realizan el 
traslado. La pantalla reflejará la cantidad de comprobantes resultantes y dará la 
oportunidad de listarlos e integrarlos posteriormente.`,
            },
            {
              label: "*Tener en cuenta*",
              description: `El comprobante generado se considera manual, por lo que el usuario podrá modificarlo o 
anularlo una vez generado aunque si la intención es inactivar la cuenta origen no tendrá 
sentido realizar modificaciones al mismo. `,
            },
          ],
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
