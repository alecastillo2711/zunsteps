export const zunst = {
  mNombre: "ZUNstock Almacén",
  mImage: "/st",
  mResumen: "Resumen",
  mSecciones: [
    {
      id: 1,
      sNombre: "Configuración",
      acciones: [
        {
          id: 1,
          aNombre: "Enlaces Empresa / Moneda",
          aResumen: `Este módulo permite definir la empresa que utilizará el sistema y vincularla con la moneda oficial de operación. Sirve para:

Establecer la identidad institucional dentro del sistema ZUNst.

Configurar la moneda base en la que se registrarán los valores contables.

Evitar errores en cálculos, reportes y comprobantes contables por falta de configuración inicial.

Asegurar que todas las operaciones se realicen bajo un contexto contable coherente.`,
          pasos: [
            {
              label: "Acceder al módulo Enlaces Empresa / Moneda",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Enlaces Empresa / Moneda.",
            },
            {
              label: "Seleccionar la empresa",
              description:
                "Elige la empresa o entidad que utilizará el sistema. Verifica que el nombre y código sean correctos.",
            },
            {
              label: "Definir la moneda oficial",
              description:
                "Selecciona la moneda en la que se registrarán los valores contables. Esta será la base para todas las operaciones.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los enlaces. El sistema aplicará esta configuración a todos los módulos.",
            },
          ],
        },
        {
          id: 2,
          aNombre: "Cuentas Especiales",
          aResumen: `Este módulo permite definir cuentas contables específicas que serán utilizadas por el sistema para operaciones automáticas, como ajustes, retiros, depreciación y revalorización. Sirve para:

Evitar que el usuario tenga que seleccionar cuentas manualmente en cada operación.

Asegurar que los comprobantes contables se generen con las cuentas correctas.

Facilitar la integración con el sistema contable institucional.

Prevenir errores contables por omisión o selección incorrecta de cuentas.`,
          pasos: [
            {
              label: "Acceder al módulo Cuentas Especiales",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Cuentas Especiales.",
            },
            {
              label: "Definir cuentas por tipo de operación",
              description:
                "Asigna las cuentas contables para cada tipo de operación: depreciación, retiro, ajuste de importe, revalorización, etc.",
            },
            {
              label: "Verificar la estructura contable",
              description:
                "Confirma que las cuentas seleccionadas pertenecen al plan contable vigente y están activas.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar las cuentas especiales. El sistema las usará automáticamente en los módulos correspondientes.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Configuración de Monedas",
          aResumen: `Este módulo permite definir las monedas que serán utilizadas en el sistema, incluyendo su código, nombre, símbolo y tipo de cambio. Sirve para:

Establecer las monedas oficiales y secundarias que se usarán en operaciones contables y técnicas.

Configurar el tipo de cambio para operaciones en moneda extranjera.

Evitar errores en cálculos, reportes y comprobantes por falta de definición monetaria.

Facilitar la integración con sistemas contables multimoneda y reportes financieros.`,
          pasos: [
            {
              label: "Acceder al módulo Configuración de Monedas",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Monedas para visualizar y gestionar las monedas disponibles.",
            },
            {
              label: "Registrar nueva moneda",
              description:
                "Haz clic en Agregar. Ingresa el código de la moneda, nombre, símbolo y tipo de cambio respecto a la moneda base.",
            },
            {
              label: "Editar moneda existente",
              description:
                "Selecciona una moneda registrada y haz clic en Editar para modificar su tipo de cambio o datos descriptivos.",
            },
            {
              label: "Definir moneda base",
              description:
                "Marca la moneda principal que se usará como referencia contable. Esta será la base para todos los cálculos.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. El sistema aplicará esta configuración en todos los módulos contables.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Configuración de Unidades de Medida",
          aResumen: `Este módulo permite definir las unidades de medida que se utilizarán para describir las cantidades físicas de los activos fijos tangibles (AFT). Sirve para:

Establecer unidades estándar como unidad, metro, litro, kilogramo, etc., según el tipo de bien.

Evitar ambigüedades en la descripción técnica de los medios.

Asegurar consistencia en reportes, fichas técnicas y operaciones de inventario.

Facilitar la clasificación y valorización de activos físicos.`,
          pasos: [
            {
              label: "Acceder al módulo Unidades de Medida",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Unidades de Medida para visualizar y gestionar las unidades disponibles.",
            },
            {
              label: "Agregar nueva unidad",
              description:
                "Haz clic en Agregar. Ingresa el nombre de la unidad (ej. Unidad, Metro, Litro), su abreviatura y descripción si aplica.",
            },
            {
              label: "Editar o eliminar unidades existentes",
              description:
                "Selecciona una unidad registrada y haz clic en Editar para modificarla o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Las unidades estarán disponibles en los formularios de carga y modificación de medios.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Especialidad de Proveedores",
          aResumen: `Este módulo permite definir y clasificar las especialidades de los proveedores registrados en el sistema, según el tipo de bienes o servicios que ofrecen. Sirve para:

Organizar los proveedores por categoría funcional (ej. tecnología, mobiliario, transporte, construcción).

Facilitar la selección de proveedores adecuados en procesos de adquisición o mantenimiento.

Evitar errores al asignar proveedores a medios o servicios que no corresponden a su especialidad.

Mejorar la trazabilidad y análisis de compras por tipo de proveedor.`,
          pasos: [
            {
              label: "Acceder al módulo Especialidad de Proveedores",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Especialidad de Proveedores.",
            },
            {
              label: "Agregar nueva especialidad",
              description:
                "Haz clic en Agregar. Ingresa el nombre de la especialidad (ej. Equipos Informáticos, Vehículos, Mantenimiento Civil) y una descripción si aplica.",
            },
            {
              label: "Editar o eliminar especialidades existentes",
              description:
                "Selecciona una especialidad registrada y haz clic en Editar para modificarla o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Las especialidades estarán disponibles al registrar o modificar proveedores.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Clientes",
          aResumen: `Este módulo permite registrar y gestionar los datos de los clientes institucionales que reciben bienes, servicios o atención vinculada a los activos fijos tangibles (AFT). Sirve para:

Identificar claramente a las entidades o personas que interactúan con el sistema como receptores.

Facilitar la trazabilidad de entregas, asignaciones o servicios vinculados a medios.

Evitar errores en la asignación de activos o en la generación de comprobantes técnicos.

Organizar la información de clientes por tipo, ubicación, contacto y especialidad.`,
          pasos: [
            {
              label: "Acceder al módulo Clientes",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Clientes para visualizar y gestionar los registros existentes.",
            },
            {
              label: "Agregar nuevo cliente",
              description:
                "Haz clic en Agregar. Ingresa los datos del cliente: nombre, tipo (institucional, externo), dirección, contacto y especialidad si aplica.",
            },
            {
              label: "Editar o eliminar clientes existentes",
              description:
                "Selecciona un cliente registrado y haz clic en Editar para modificar sus datos o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Los clientes estarán disponibles en los módulos de asignación, entrega o atención técnica.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Conceptos de Gastos",
          aResumen: `Este módulo permite definir y clasificar los conceptos de gasto que se utilizarán en las operaciones patrimoniales, como adquisiciones, mantenimientos, retiros o revalorizaciones. Sirve para:

Establecer categorías contables y presupuestarias que se aplican a cada tipo de operación.

Evitar errores al registrar comprobantes contables por falta de codificación de gasto.

Facilitar la integración con sistemas presupuestarios y reportes de ejecución financiera.

Organizar los gastos por tipo, naturaleza y aplicación institucional.`,
          pasos: [
            {
              label: "Acceder al módulo Conceptos de Gastos",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Conceptos de Gastos para visualizar y gestionar los registros existentes.",
            },
            {
              label: "Agregar nuevo concepto de gasto",
              description:
                "Haz clic en Agregar. Ingresa el código, nombre, tipo de gasto (corriente, capitalizable, mantenimiento, etc.) y descripción si aplica.",
            },
            {
              label: "Editar o eliminar conceptos existentes",
              description:
                "Selecciona un concepto registrado y haz clic en Editar para modificarlo o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Los conceptos estarán disponibles en los módulos de operación contable y técnica.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Temporadas",
          aResumen: `Este módulo permite definir los períodos contables o de gestión patrimonial que segmentan el uso del sistema por año o ciclo. Sirve para:

Establecer el marco temporal en el que se registrarán las operaciones patrimoniales.

Evitar que se realicen operaciones fuera de temporada o en períodos no habilitados.

Facilitar el cierre contable, la depreciación y la trazabilidad por año.

Organizar los reportes y análisis por temporada activa.`,
          pasos: [
            {
              label: "Acceder al módulo Temporadas",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Temporadas.",
            },
            {
              label: "Agregar nueva temporada",
              description:
                "Haz clic en Agregar. Ingresa el nombre de la temporada (ej. 2025), la fecha de inicio y la fecha de cierre.",
            },
            {
              label: "Activar temporada",
              description:
                "Marca la temporada como activa para permitir operaciones dentro de ese período.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar la temporada. El sistema aplicará esta estructura temporal en todos los módulos operativos.",
            },
          ],
        },
        {
          id: 11,
          aNombre: "Enlaces de Temporadas",
          aResumen: `Este módulo permite vincular cada temporada con parámetros clave como cuentas contables, monedas, submayores y responsables, asegurando que las operaciones se registren correctamente según el período activo. Sirve para:

Evitar errores contables por falta de asociación entre temporada y parámetros operativos.

Automatizar la selección de cuentas, monedas y responsables según el período vigente.

Facilitar la trazabilidad de operaciones por temporada y su integración contable.

Asegurar que cada temporada tenga sus propios enlaces funcionales definidos.`,
          pasos: [
            {
              label: "Acceder al módulo Enlaces de Temporadas",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Enlaces de Temporadas.",
            },
            {
              label: "Seleccionar temporada activa",
              description:
                "Elige la temporada que deseas vincular con parámetros contables y operativos.",
            },
            {
              label: "Definir enlaces funcionales",
              description:
                "Asocia la temporada con cuentas contables, monedas, submayores, responsables y otros parámetros necesarios.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los enlaces. El sistema aplicará estos vínculos automáticamente en las operaciones de esa temporada.",
            },
          ],
        },
        {
          id: 13,
          aNombre: "Impuestos",
          aResumen: `Este módulo permite registrar y gestionar los tipos de impuestos que se aplican a los bienes patrimoniales, como el IVA u otros tributos institucionales. Sirve para:

Definir los porcentajes de impuestos aplicables en adquisiciones, revalorizaciones o servicios vinculados a activos.

Evitar errores en la valorización contable por omisión o cálculo incorrecto de tributos.

Facilitar la generación automática de comprobantes con impuestos incluidos.

Asegurar coherencia entre la ficha técnica del medio y su impacto fiscal.`,
          pasos: [
            {
              label: "Acceder al módulo Impuestos",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Impuestos para visualizar y gestionar los tributos registrados.",
            },
            {
              label: "Agregar nuevo impuesto",
              description:
                "Haz clic en Agregar. Ingresa el nombre del impuesto (ej. IVA), el porcentaje aplicable y una descripción si aplica.",
            },
            {
              label: "Definir aplicación del impuesto",
              description:
                "Indica si el impuesto se aplica en adquisiciones, servicios, revalorizaciones u otras operaciones patrimoniales.",
            },
            {
              label: "Editar o eliminar impuestos existentes",
              description:
                "Selecciona un impuesto registrado y haz clic en Editar para modificarlo o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. El sistema aplicará estos impuestos automáticamente en los módulos operativos.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      sNombre: "Almacén y Parámetros",
      acciones: [
        {
          id: 14,
          aNombre: "Crear Nuevos Almacenes",
          aResumen: `Este módulo permite registrar nuevos almacenes físicos dentro del sistema, donde se ubicarán y gestionarán los activos fijos tangibles (AFT). Sirve para:

Establecer depósitos institucionales donde se almacenan, asignan o trasladan los bienes patrimoniales.

Evitar confusión en la ubicación física de los medios registrados.

Facilitar la trazabilidad de activos por almacén, sede o dependencia.

Permitir operaciones como ingreso, transferencia, retiro y asignación desde ubicaciones definidas.`,
          pasos: [
            {
              label: "Acceder al módulo Almacenes",
              description:
                "Desde el menú Parámetros de Almacén, selecciona la opción Almacenes para visualizar los registros existentes.",
            },
            {
              label: "Agregar nuevo almacén",
              description:
                "Haz clic en Agregar. Ingresa el nombre del almacén, código identificador, ubicación física y descripción si aplica.",
            },
            {
              label: "Definir tipo y responsable",
              description:
                "Selecciona el tipo de almacén (central, auxiliar, temporal) y asigna un responsable institucional.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar el nuevo almacén. Estará disponible en los módulos operativos de ingreso, transferencia y asignación de medios.",
            },
          ],
        },
        {
          id: 15,
          aNombre: "Modificar o Eliminar Almacenes",
          aResumen: `Este módulo permite editar los datos de almacenes registrados o eliminarlos si ya no se utilizan. Sirve para:

Actualizar información como nombre, ubicación o responsable del almacén.

Eliminar depósitos obsoletos o mal registrados que no tienen medios asignados.

Evitar confusión en la trazabilidad física de los activos.

Mantener una estructura de almacenes limpia y operativa.`,
          pasos: [
            {
              label: "Acceder al módulo Almacenes",
              description:
                "Desde el menú Parámetros de Almacén, selecciona la opción Almacenes para visualizar los registros existentes.",
            },
            {
              label: "Seleccionar el almacén a modificar o eliminar",
              description:
                "Ubica el almacén en la lista y haz clic sobre él para acceder a sus datos.",
            },
            {
              label: "Modificar datos del almacén",
              description:
                "Haz clic en Editar. Actualiza el nombre, ubicación, tipo o responsable según corresponda.",
            },
            {
              label: "Eliminar almacén",
              description:
                "Haz clic en Eliminar. El sistema verificará que no existan medios asignados antes de permitir la eliminación.",
            },
            {
              label: "Guardar los cambios",
              description:
                "Haz clic en Aceptar para registrar las modificaciones o confirmar la eliminación. El sistema actualizará la estructura de almacenes.",
            },
          ],
        },
        {
          id: 17,
          aNombre: "Parámetros",
          aResumen: `Este módulo permite configurar valores técnicos y operativos que afectan el comportamiento general del sistema, como la numeración de comprobantes, el control de fechas, y la validación de operaciones. Sirve para:

Establecer reglas institucionales sobre cómo se comportan los módulos técnicos y contables.

Evitar errores por falta de control en fechas, numeraciones o validaciones automáticas.

Asegurar coherencia entre los procesos operativos y las políticas internas de gestión patrimonial.

Adaptar el sistema a las necesidades específicas de cada entidad usuaria.`,
          pasos: [
            {
              label: "Acceder al módulo Parámetros",
              description:
                "Desde el menú de administración técnica, selecciona la opción Parámetros para visualizar las configuraciones disponibles.",
            },
            {
              label: "Revisar las secciones disponibles",
              description:
                "El módulo está dividido en secciones como: numeración de comprobantes, control de fechas, validaciones, y comportamiento de módulos.",
            },
            {
              label: "Modificar valores según necesidad institucional",
              description:
                "Edita los campos según las políticas de tu entidad: por ejemplo, permitir operaciones retroactivas, activar validación de responsables, o definir el formato de numeración.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. El sistema aplicará estos parámetros en todos los módulos afectados.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sNombre: "Proveedores",
      acciones: [
        {
          id: 18,
          aNombre: "Proveedores y Especialidades",
          aResumen: `Este módulo permite registrar proveedores institucionales y clasificarlos según su especialidad técnica o comercial. Sirve para:

Organizar los proveedores por tipo de bien o servicio que ofrecen (ej. tecnología, mobiliario, transporte).

Facilitar la selección de proveedores adecuados en procesos de adquisición, mantenimiento o retiro.

Evitar errores al asignar proveedores a medios que no corresponden a su especialidad.

Mejorar la trazabilidad de compras, servicios y contratos por tipo de proveedor.`,
          pasos: [
            {
              label: "Acceder al módulo Proveedores",
              description:
                "Desde el menú Parámetros Generales, selecciona la opción Proveedores para visualizar los registros existentes.",
            },
            {
              label: "Agregar nuevo proveedor",
              description:
                "Haz clic en Agregar. Ingresa los datos del proveedor: nombre, RUC o identificación, dirección, contacto y especialidad.",
            },
            {
              label: "Seleccionar especialidad del proveedor",
              description:
                "Elige una especialidad previamente registrada (ej. Equipos Informáticos, Mantenimiento Civil). Si no existe, agrégala desde el módulo Especialidad de Proveedores.",
            },
            {
              label: "Editar o eliminar proveedores existentes",
              description:
                "Selecciona un proveedor registrado y haz clic en Editar para modificar sus datos o en Eliminar si ya no se utiliza.",
            },
            {
              label: "Guardar la configuración",
              description:
                "Haz clic en Aceptar para registrar los cambios. Los proveedores estarán disponibles en los módulos de ingreso, mantenimiento y retiro de medios.",
            },
          ],
        },
      ],
    },
  ],
};
