export const zunaft = {
  mNombre: "ZUNAft Activos Fijos",
  mImage: "/acc",
  mResumen: "Resumen",
  mSecciones: [
    {
      id: 2,
      sNombre: "Botones",
      acciones: [
        {
          id: 1,
          aNombre: "Botones de la Aplicación",
          aResumen: `Esta sección describe la funcionalidad de los botones comunes en las pantallas del sistema ZUNaft. Sirve para:

Facilitar la interacción del usuario con los formularios y registros del sistema.

Estandarizar las acciones básicas como agregar, modificar, eliminar, imprimir o cancelar movimientos.

Evitar errores operativos al comprender el propósito de cada botón en la interfaz.`,
          pasos: [
            {
              label: "Adicionar",
              description:
                "Permite agregar un nuevo registro en la pantalla activa.",
            },
            {
              label: "Eliminar",
              description: "Borra el registro seleccionado de la lista.",
            },
            {
              label: "Refrescar",
              description:
                "Actualiza los controles que dependen de otras pantallas sin necesidad de cerrarlas.",
            },
            {
              label: "Modificar",
              description:
                "Permite editar el registro seleccionado si no tiene movimientos asociados.",
            },
            {
              label: "Aceptar",
              description:
                "Confirma la operación realizada y guarda los cambios.",
            },
            {
              label: "Cancelar Mov",
              description:
                "Cancela un movimiento en curso y revierte los cambios.",
            },
            {
              label: "Imprimir",
              description: `Permite imprimir un listado seleccionado. Para hacerlo:
1. Selecciona una o varias filas (usando Shift o Ctrl).
2. Haz clic en Aceptar o Imprimir.
3. Selecciona la impresora.
4. Confirma la impresión.
5. Cierra el reporte al finalizar.`,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sNombre: "Clasificadores",
      acciones: [
        {
          id: 2,
          aNombre: "Centros de costo",
          aResumen: `Este módulo permite definir los centros de costo de la entidad,
           asociarles cuentas contables específicas y establecer el tipo de control de inventario
            (modular, manual o automático). Es clave para organizar la estructura contable y operativa
             de los activos fijos tangibles, y para garantizar que cada medio esté correctamente
              vinculado a su centro de responsabilidad.`,
          pasos: [
            {
              label: "Acceder al clasificador de centros de costo",
              description:
                "Desde el menú Clasificadores, selecciona la opción Centro de Costo para visualizar y gestionar los registros existentes.",
            },
            {
              label: "Visualizar centros de costo existentes",
              description:
                "En la pestaña General se muestran los códigos, descripciones y tipo de control de inventario de cada centro.",
            },
            {
              label: "Adicionar un nuevo centro de costo",
              description:
                "Haz clic en Adicionar, introduce el código, descripción, cuentas asociadas y selecciona el tipo de control de inventario. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar un centro de costo existente",
              description:
                "Selecciona el centro desde la pantalla general, haz clic en Modificar y ajusta los campos permitidos. No se puede cambiar el tipo de control si ya tiene medios asociados.",
            },
            {
              label: "Eliminar un centro de costo",
              description:
                "Selecciona el registro y haz clic en Eliminar. Solo se podrá eliminar si no tiene medios vinculados.",
            },
            {
              label: "Imprimir listado de centros de costo",
              description:
                "Haz clic en Imprimir para generar un reporte con los centros visibles en pantalla.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Cuentas",
          aResumen: `Este módulo permite registrar y administrar las cuentas contables
           que se utilizarán en los movimientos de activos fijos tangibles. Cada cuenta 
           se define con su número, descripción, moneda, tipo y departamento asociado. 
           Es esencial para garantizar la correcta imputación contable de operaciones y 
           mantener una estructura financiera organizada y trazable.`,
          pasos: [
            {
              label: "Acceder al clasificador de cuentas",
              description:
                "Desde el menú Clasificadores, selecciona la opción Cuentas para visualizar y gestionar las cuentas registradas.",
            },
            {
              label: "Visualizar cuentas existentes",
              description:
                "En la pestaña General se muestran todas las cuentas con su número, descripción, moneda, tipo de cuenta y departamento asociado.",
            },
            {
              label: "Adicionar una nueva cuenta",
              description:
                "Haz clic en Adicionar, introduce el número de cuenta, descripción, moneda, tipo de cuenta y departamento si aplica. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar una cuenta existente",
              description:
                "Selecciona una cuenta sin movimientos asociados, haz clic en Modificar y ajusta los campos permitidos. Guarda los cambios con Aceptar.",
            },
            {
              label: "Eliminar una cuenta",
              description:
                "Selecciona la cuenta y haz clic en Eliminar. Solo se podrán eliminar cuentas sin movimientos relacionados.",
            },
            {
              label: "Imprimir listado de cuentas",
              description:
                "Haz clic en Imprimir para generar un reporte con las cuentas visibles en la pantalla.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Clasificador de Centro de Costo",
          aResumen: `Este módulo permite definir los centros de costo de la entidad, asociarles cuentas contables específicas y establecer el tipo de control de inventario. Sirve para:

Organizar la estructura contable y operativa de los activos fijos tangibles (AFT).

Asignar cuentas de gasto de depreciación y valor residual por centro de costo.

Determinar el método de control de inventario: modular, introducción manual o generación automática.

Evitar errores en la asignación de medios, garantizando trazabilidad y consistencia contable.`,
          pasos: [
            {
              label: "Acceder al clasificador de centros de costo",
              description:
                "Desde el menú Clasificadores, selecciona la opción Centro de Costo para visualizar y gestionar los registros existentes.",
            },
            {
              label: "Visualizar centros de costo existentes",
              description:
                "En la pestaña General se muestran los códigos, descripciones y tipo de control de inventario de cada centro.",
            },
            {
              label: "Adicionar un nuevo centro de costo",
              description:
                "Haz clic en Adicionar, introduce el código, descripción, cuentas asociadas y selecciona el tipo de control de inventario. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar un centro de costo existente",
              description:
                "Selecciona el centro desde la pantalla general, haz clic en Modificar y ajusta los campos permitidos. No se puede cambiar el tipo de control si ya tiene medios asociados.",
            },
            {
              label: "Eliminar un centro de costo",
              description:
                "Selecciona el registro y haz clic en Eliminar. Solo se podrá eliminar si no tiene medios vinculados.",
            },
            {
              label: "Imprimir listado de centros de costo",
              description:
                "Haz clic en Imprimir para generar un reporte con los centros visibles en pantalla.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Genérico/Descripción del AFT",
          aResumen: `Este módulo permite definir los genéricos de activos fijos tangibles (AFT), asociarles cuentas contables y tasas de depreciación, y generar automáticamente los submayores vinculados. Sirve para:

Establecer la clasificación base de los medios por tipo genérico.

Asociar cuentas en moneda nacional (MN) y divisa (DIV), así como tasas de depreciación correspondientes.

Generar submayores consecutivos para cada medio, facilitando su trazabilidad contable y operativa.

Evitar errores en la asignación de medios al mantener una estructura jerárquica clara y automatizada.`,
          pasos: [
            {
              label: "Acceder al clasificador de genéricos",
              description:
                "Desde el menú Clasificadores, selecciona la opción Genérico/Descripción del AFT para visualizar y gestionar los registros.",
            },
            {
              label: "Visualizar genéricos existentes",
              description:
                "En la pestaña General se muestran los códigos de genérico, descripción, cuentas en MN y DIV, y tasas asociadas.",
            },
            {
              label: "Adicionar un nuevo genérico",
              description:
                "Haz clic en Adicionar, introduce el código, descripción, cuentas en MN y DIV, tasas de depreciación en MN y DIV. Luego haz clic en Aceptar.",
            },
            {
              label: "Generar submayores automáticamente",
              description:
                "Al registrar un medio, el sistema asigna un número de submayor consecutivo basado en el código del genérico.",
            },
            {
              label: "Modificar un genérico existente",
              description:
                "Selecciona el genérico, haz clic en Modificar y ajusta los campos permitidos. Puedes eliminar submayores con la tecla Delete.",
            },
            {
              label: "Configurar depreciación por kilómetros recorridos",
              description:
                "Para medios de transporte, marca la opción correspondiente si aplica. Solo algunas entidades utilizan esta variante.",
            },
            {
              label: "Actualizar datos del submayor",
              description:
                "Haz clic en Actualizar Datos para asociar el CNMB y otros atributos requeridos por modelos oficiales.",
            },
            {
              label: "Imprimir listado de genéricos",
              description:
                "Haz clic en Imprimir para generar un reporte con los genéricos y submayores visibles en pantalla.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Clasificador de Áreas y Subáreas",
          aResumen: `Este módulo permite definir las áreas y subáreas de cada centro de costo, incluyendo sus responsables. Sirve para:

Organizar la estructura operativa de la entidad por zonas funcionales.

Asignar responsables a cada área o subárea, facilitando el control y la trazabilidad de los activos.

Vincular cada área a su centro de costo correspondiente, asegurando coherencia en la gestión contable y operativa.

Evitar ambigüedades en la asignación de medios al mantener una jerarquía clara de ubicación y responsabilidad.`,
          pasos: [
            {
              label: "Acceder al clasificador de áreas y subáreas",
              description:
                "Desde el menú Clasificadores, selecciona la opción Áreas y Subáreas para visualizar y gestionar los registros.",
            },
            {
              label: "Visualizar áreas existentes",
              description:
                "En la pestaña General se muestran las áreas con su nombre, responsable y centro de costo asociado.",
            },
            {
              label: "Adicionar una nueva área",
              description:
                "Haz clic en Adicionar, selecciona el centro de costo, introduce el nombre del área y el responsable. Luego haz clic en Aceptar.",
            },
            {
              label: "Adicionar subáreas",
              description:
                "Si el área tiene subáreas, introduce el nombre y responsable de cada una en la sección correspondiente.",
            },
            {
              label: "Modificar un área o subárea existente",
              description:
                "Selecciona el área o subárea, haz clic en Modificar y ajusta los campos permitidos. Confirma con Aceptar.",
            },
            {
              label: "Eliminar una subárea",
              description:
                "Selecciona el área, haz clic en Modificar, selecciona la subárea y elimínala con la tecla Delete.",
            },
            {
              label: "Imprimir listado de áreas y subáreas",
              description:
                "Haz clic en Imprimir para generar un reporte con las áreas y subáreas visibles en pantalla.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Datos Generales de la Entidad",
          aResumen: `Este módulo permite definir y visualizar la información institucional básica de la entidad que opera el sistema. Sirve para:

Registrar el código, nombre, dirección, provincia, corporación y compañía de la entidad.

Configurar las cuentas contables que se utilizarán por centro de costo para cada tipo de movimiento.

Establecer las plantillas predeterminadas para los comprobantes contables según el tipo de operación.

Evitar inconsistencias contables al mantener una configuración centralizada y validada de los datos institucionales.`,
          pasos: [
            {
              label: "Acceder a Datos Generales de la Entidad",
              description:
                "Desde el menú principal, selecciona la opción Datos Generales para visualizar y configurar la información institucional.",
            },
            {
              label: "Visualizar datos existentes",
              description:
                "Se muestran el código, nombre, dirección, provincia, corporación y compañía. El nombre no puede modificarse.",
            },
            {
              label: "Configurar cuentas por centro de costo",
              description:
                "Marca las cuentas que se utilizarán por centro de costo: AFT, depreciación, gasto, valor residual, sobrante y faltante.",
            },
            {
              label: "Asignar plantillas de comprobantes",
              description:
                "Para cada tipo de movimiento (altas, bajas, ajustes, etc.), selecciona la plantilla contable predeterminada que se aplicará.",
            },
            {
              label: "Modificar datos permitidos",
              description:
                "Haz clic en Modificar para ajustar campos editables como dirección, provincia, corporación o compañía. Confirma con Aceptar.",
            },
            {
              label: "Cerrar la configuración",
              description:
                "Haz clic en Cerrar para salir del módulo una vez completada la configuración.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Inventario (Apertura y Cierre)",
          aResumen: `Este módulo permite gestionar el inventario físico de los activos fijos tangibles (AFT), incluyendo su apertura inicial y cierre. Sirve para:

Registrar el estado físico inicial de los activos en la entidad, como punto de partida para su control.

Cerrar el inventario una vez completado, consolidando la información registrada y bloqueando modificaciones.

Garantizar la trazabilidad y consistencia entre el inventario físico y los registros contables.

Evitar desajustes operativos al establecer un ciclo claro de apertura y cierre del inventario.`,
          pasos: [
            {
              label: "Acceder al módulo de Inventario",
              description:
                "Desde el menú Clasificadores, selecciona la opción Inventario para gestionar la apertura y cierre del inventario físico.",
            },
            {
              label: "Apertura del Inventario Físico Inicial",
              description:
                "Haz clic en Apertura, registra los medios físicos existentes, valida sus datos y confirma para establecer el inventario base.",
            },
            {
              label: "Verificar medios registrados",
              description:
                "Revisa que todos los activos estén correctamente ingresados con sus datos completos antes de cerrar el inventario.",
            },
            {
              label: "Cierre de Inventario",
              description:
                "Haz clic en Cierre, confirma que no hay inconsistencias y bloquea el inventario para evitar modificaciones posteriores.",
            },
            {
              label: "Imprimir reporte de inventario",
              description:
                "Haz clic en Imprimir para generar un listado de los activos registrados durante el proceso de inventario.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Subgrupos y CNMB",
          aResumen: `Este módulo permite clasificar los activos fijos tangibles (AFT) en subgrupos y asociarlos con códigos del CNMB (Clasificador Nacional de Bienes). Sirve para:

Organizar los activos en subconjuntos más específicos dentro de cada genérico.

Asociar cada subgrupo con su correspondiente código CNMB, cumpliendo con las normativas nacionales.

Facilitar la generación de reportes y modelos oficiales exigidos por el Ministerio de Finanzas y Precios.

Evitar errores de clasificación y asegurar la trazabilidad normativa de los activos.`,
          pasos: [
            {
              label: "Acceder al módulo de Subgrupos y CNMB",
              description:
                "Desde el menú Clasificadores, selecciona la opción Subgrupos y CNMB para gestionar la clasificación detallada de los activos.",
            },
            {
              label: "Visualizar subgrupos existentes",
              description:
                "En la pantalla principal se muestran los subgrupos definidos con sus descripciones y códigos CNMB asociados.",
            },
            {
              label: "Adicionar un nuevo subgrupo",
              description:
                "Haz clic en Adicionar, introduce el código del subgrupo, su descripción y el código CNMB correspondiente. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar un subgrupo existente",
              description:
                "Selecciona el subgrupo desde la lista, haz clic en Modificar y ajusta los campos permitidos. Guarda los cambios con Aceptar.",
            },
            {
              label: "Eliminar un subgrupo",
              description:
                "Selecciona el subgrupo y haz clic en Eliminar. Solo se podrá eliminar si no está asociado a medios registrados.",
            },
            {
              label: "Imprimir listado de subgrupos",
              description:
                "Haz clic en Imprimir para generar un reporte con los subgrupos y sus códigos CNMB.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Parametrización de Comprobantes",
          aResumen: `Este módulo permite definir las plantillas contables predeterminadas que se aplicarán a cada tipo de movimiento de activos fijos tangibles (AFT). Sirve para:

Establecer reglas contables automatizadas para operaciones como altas, bajas, ajustes y traspasos.

Asignar cuentas específicas según el tipo de movimiento, garantizando coherencia contable y cumplimiento normativo.

Facilitar la generación automática de comprobantes contables en el sistema.

Evitar errores de imputación al mantener una configuración clara y centralizada de las plantillas contables.`,
          pasos: [
            {
              label: "Acceder a la parametrización de comprobantes",
              description:
                "Desde el menú Clasificadores, selecciona la opción Parametrización de Comprobantes para visualizar y configurar las plantillas contables.",
            },
            {
              label: "Visualizar plantillas existentes",
              description:
                "Se muestran los tipos de movimiento junto con la plantilla contable predeterminada asignada a cada uno.",
            },
            {
              label: "Asignar plantilla a tipo de movimiento",
              description:
                "Selecciona el tipo de movimiento (ej. Alta por Compra, Baja por Retiro) y elige la plantilla contable que se aplicará automáticamente.",
            },
            {
              label: "Modificar plantilla asignada",
              description:
                "Haz clic en Modificar para cambiar la plantilla contable de un tipo de movimiento. Confirma los cambios con Aceptar.",
            },
            {
              label: "Validar configuración contable",
              description:
                "Revisa que cada tipo de movimiento tenga una plantilla asignada coherente con las cuentas definidas en la entidad.",
            },
            {
              label: "Cerrar la configuración",
              description:
                "Haz clic en Cerrar para salir del módulo una vez completada la parametrización.",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      sNombre: "Acceso",
      acciones: [
        {
          id: 10,
          aNombre: "Gestión de Usuarios",
          aResumen: `Este módulo permite administrar los usuarios que acceden al sistema ZUNaft, asignarles roles y controlar sus permisos. Sirve para:

Registrar nuevos usuarios con credenciales y roles específicos según sus funciones.

Asignar niveles de acceso a cada módulo del sistema, garantizando seguridad y control operativo.

Modificar o eliminar usuarios según cambios organizativos o de personal.

Evitar accesos no autorizados y mantener la trazabilidad de las acciones realizadas en el sistema.`,
          pasos: [
            {
              label: "Acceder al módulo de Usuarios",
              description:
                "Desde el menú principal, selecciona la opción Usuarios para visualizar y gestionar los registros existentes.",
            },
            {
              label: "Visualizar usuarios registrados",
              description:
                "En la pantalla principal se muestran los nombres de usuario, roles asignados y estado de acceso.",
            },
            {
              label: "Adicionar un nuevo usuario",
              description:
                "Haz clic en Adicionar, introduce el nombre de usuario, contraseña, rol y módulos a los que tendrá acceso. Luego haz clic en Aceptar.",
            },
            {
              label: "Modificar un usuario existente",
              description:
                "Selecciona el usuario, haz clic en Modificar y ajusta los campos permitidos como contraseña, rol o permisos. Confirma con Aceptar.",
            },
            {
              label: "Eliminar un usuario",
              description:
                "Selecciona el usuario y haz clic en Eliminar. Solo se podrá eliminar si no tiene operaciones pendientes o bloqueos activos.",
            },
            {
              label: "Imprimir listado de usuarios",
              description:
                "Haz clic en Imprimir para generar un reporte con los usuarios visibles en pantalla.",
            },
          ],
        },
        {
          id: 1,
          aNombre: "Reinicio del Sistema",
          aResumen: `Este módulo permite reiniciar la base de datos del sistema ZUNaft, eliminando todos los registros operativos y dejando únicamente la estructura contable y clasificadores. Sirve para:

Realizar una limpieza total del sistema en caso de errores graves, cambios institucionales o reconfiguración completa.

Eliminar todos los medios, movimientos, comprobantes y registros asociados a operaciones previas.

Conservar los clasificadores contables, genéricos, tasas, centros de costo y usuarios para facilitar la reconfiguración.

Evitar inconsistencias futuras al garantizar un punto de partida limpio y estructurado.`,
          pasos: [
            {
              label: "Acceder al módulo de Reinicio",
              description:
                "Desde el menú principal, selecciona la opción Reinicio del Sistema para iniciar el proceso de limpieza.",
            },
            {
              label: "Confirmar intención de reinicio",
              description:
                "Lee cuidadosamente la advertencia. El sistema eliminará todos los datos operativos y no podrá revertirse.",
            },
            {
              label: "Ejecutar el reinicio",
              description:
                "Haz clic en Aceptar para confirmar. El sistema eliminará medios, movimientos, comprobantes y registros operativos.",
            },
            {
              label: "Verificar estructura preservada",
              description:
                "Una vez reiniciado, revisa que los clasificadores y estructura contable permanezcan intactos para comenzar la reconfiguración.",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      sNombre: "Altas",
      acciones: [
        {
          id: 2,
          aNombre: "Alta por Compra",
          aResumen: `Este módulo permite registrar la incorporación de activos fijos tangibles (AFT) adquiridos mediante compra. Sirve para:

Registrar medios adquiridos por la entidad, incluyendo datos contables, físicos y administrativos.

Asignar el medio a su centro de costo, área, subárea y responsable correspondiente.

Generar automáticamente el comprobante contable asociado a la operación de alta.

Evitar omisiones en el inventario y garantizar la trazabilidad contable de los activos comprados.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Compra",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Compra para iniciar el registro de nuevos medios.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor, fecha de alta, proveedor y número de factura.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de compra.",
            },
          ],
        },
        {
          id: 3,
          aNombre: "Alta por Donación",
          aResumen: `Este módulo permite registrar la incorporación de activos fijos tangibles (AFT) recibidos mediante donación. Sirve para:

Registrar medios donados por otras entidades, incluyendo sus datos físicos, contables y administrativos.

Asignar el medio a su centro de costo, área, subárea y responsable correspondiente.

Generar automáticamente el comprobante contable asociado a la operación de alta por donación.

Evitar omisiones en el inventario y garantizar la trazabilidad contable de los activos donados.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Donación",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Donación para iniciar el registro de medios recibidos.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor estimado, fecha de alta y entidad donante.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de donación.",
            },
          ],
        },
        {
          id: 4,
          aNombre: "Alta por Transferencia",
          aResumen: `Este módulo permite registrar la incorporación de activos fijos tangibles (AFT) recibidos mediante transferencia desde otra entidad. Sirve para:

Registrar medios transferidos con sus datos físicos, contables y administrativos, incluyendo origen y destino.

Asignar el medio a su centro de costo, área, subárea y responsable correspondiente.

Generar automáticamente el comprobante contable asociado a la operación de alta por transferencia.

Evitar inconsistencias en el inventario y garantizar la trazabilidad contable de los activos recibidos.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Transferencia",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Transferencia para iniciar el registro de medios recibidos.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor, fecha de alta, entidad origen y número de documento de transferencia.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de transferencia.",
            },
          ],
        },
        {
          id: 5,
          aNombre: "Alta por Ajuste",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que no estaban previamente en el sistema y se incorporan por ajuste contable. Sirve para:

Regularizar medios que existen físicamente pero no están registrados en el sistema.

Asignarles datos contables, físicos y administrativos para integrarlos al inventario oficial.

Generar el comprobante contable correspondiente a la operación de ajuste.

Evitar omisiones en el control patrimonial y garantizar la coherencia entre inventario físico y contable.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Ajuste",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Ajuste para iniciar el registro de medios omitidos.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor estimado, fecha de alta y motivo del ajuste.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de ajuste.",
            },
          ],
        },
        {
          id: 6,
          aNombre: "Alta por Producción Propia",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que han sido producidos por la propia entidad, ya sea mediante fabricación interna o transformación de otros bienes. Sirve para:

Incorporar medios generados por la entidad sin necesidad de compra o donación externa.

Registrar los datos físicos, contables y administrativos del medio producido.

Generar el comprobante contable correspondiente a la operación de alta por producción propia.

Evitar omisiones en el inventario y garantizar la trazabilidad de los activos generados internamente.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Producción Propia",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Producción Propia para iniciar el registro del medio generado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor estimado, fecha de alta y descripción del proceso productivo.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de producción propia.",
            },
          ],
        },
        {
          id: 7,
          aNombre: "Alta por Revalorización",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que han sido revalorizados y deben incorporarse al sistema con su nuevo valor. Sirve para:

Incorporar medios que han sido objeto de una revalorización contable, ya sea por actualización de precios o ajustes técnicos.

Registrar el nuevo valor del activo, manteniendo su trazabilidad y estructura contable.

Generar el comprobante contable correspondiente a la operación de revalorización.

Evitar inconsistencias entre el valor contable y el valor real de los activos.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Revalorización",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Revalorización para iniciar el registro del medio revalorizado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor actualizado, fecha de alta y motivo de la revalorización.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de revalorización.",
            },
          ],
        },
        {
          id: 8,
          aNombre: "Alta por Sobrante",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que aparecen como sobrantes durante procesos de verificación o inventario. Sirve para:

Incorporar medios que no estaban registrados pero se detectan físicamente en la entidad.

Registrar sus datos contables, físicos y administrativos para integrarlos al sistema.

Generar el comprobante contable correspondiente a la operación de alta por sobrante.

Evitar pérdidas de control patrimonial y asegurar la trazabilidad de los activos detectados.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Sobrante",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Sobrante para iniciar el registro del medio detectado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor estimado, fecha de alta y observaciones del hallazgo.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de sobrante.",
            },
          ],
        },
        {
          id: 9,
          aNombre: "Alta por Cambio de Estado",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que cambian de condición operativa y deben ser incorporados nuevamente al sistema. Sirve para:

Registrar medios que estaban dados de baja, en reparación o fuera de servicio y ahora se reincorporan como activos operativos.

Actualizar sus datos físicos, contables y administrativos según el nuevo estado.

Generar el comprobante contable correspondiente a la operación de alta por cambio de estado.

Evitar inconsistencias en el inventario y garantizar la trazabilidad de los activos reincorporados.`,
          pasos: [
            {
              label: "Acceder al módulo Alta por Cambio de Estado",
              description:
                "Desde el menú Operaciones, selecciona la opción Alta por Cambio de Estado para iniciar el registro del medio reincorporado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor actualizado, fecha de alta y motivo del cambio de estado.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas de AFT, depreciación, gasto y valor residual estén correctamente asignadas según el centro de costo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alta",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación por cambio de estado.",
            },
          ],
        },
        {
          id: 10,
          aNombre: "Préstamo Recibido",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que son recibidos en calidad de préstamo desde otra entidad. Sirve para:

Controlar medios que no pertenecen a la entidad pero están bajo su responsabilidad operativa.

Registrar los datos físicos, administrativos y contables del medio prestado, sin afectar la propiedad.

Generar el comprobante contable correspondiente a la operación de préstamo recibido.

Evitar confusiones patrimoniales y garantizar la trazabilidad de los activos prestados.`,
          pasos: [
            {
              label: "Acceder al módulo Préstamo Recibido",
              description:
                "Desde el menú Operaciones, selecciona la opción Préstamo Recibido para iniciar el registro del medio recibido.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor referencial, fecha de recepción y entidad prestadora.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas estén correctamente asignadas para reflejar el uso sin alterar la propiedad.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de préstamo",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de préstamo recibido.",
            },
          ],
        },
        {
          id: 11,
          aNombre: "Alquiler Recibido",
          aResumen: `Este módulo permite registrar activos fijos tangibles (AFT) que son recibidos en calidad de alquiler desde otra entidad o proveedor externo. Sirve para:

Controlar medios alquilados que están bajo uso temporal de la entidad sin implicar propiedad.

Registrar los datos físicos, administrativos y contables del medio alquilado, incluyendo condiciones del contrato.

Generar el comprobante contable correspondiente a la operación de alquiler recibido.

Evitar confusiones patrimoniales y garantizar la trazabilidad de los activos alquilados.`,
          pasos: [
            {
              label: "Acceder al módulo Alquiler Recibido",
              description:
                "Desde el menú Operaciones, selecciona la opción Alquiler Recibido para iniciar el registro del medio alquilado.",
            },
            {
              label: "Introducir datos del medio",
              description:
                "Completa los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa de depreciación (si aplica), centro de costo, área, subárea, responsable, valor referencial, fecha de recepción, proveedor y número de contrato.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas estén correctamente asignadas para reflejar el uso temporal sin alterar la propiedad.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de alquiler",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de alquiler recibido.",
            },
          ],
        },
        {
          id: 12,
          aNombre: "Reposición de AFT",
          aResumen: `Este módulo permite registrar la reposición de activos fijos tangibles (AFT) que han sido sustituidos por otros de igual función, ya sea por deterioro, obsolescencia o renovación operativa. Sirve para:

Registrar el nuevo medio que reemplaza a uno anterior, manteniendo la continuidad funcional en el sistema.

Vincular el medio repuesto con el original, preservando la trazabilidad operativa y contable.

Generar el comprobante contable correspondiente a la operación de reposición.

Evitar duplicidades o pérdidas de control patrimonial al formalizar el reemplazo de activos.`,
          pasos: [
            {
              label: "Acceder al módulo Reposición de AFT",
              description:
                "Desde el menú Operaciones, selecciona la opción Reposición para iniciar el registro del medio que sustituye a otro.",
            },
            {
              label: "Seleccionar el medio a reponer",
              description:
                "Busca y selecciona el activo original que será reemplazado. Verifica sus datos antes de continuar.",
            },
            {
              label: "Introducir datos del medio nuevo",
              description:
                "Completa los campos requeridos del medio que lo reemplaza: genérico, descripción, subgrupo, CNMB, tasa de depreciación, centro de costo, área, subárea, responsable, valor, fecha de alta y motivo de reposición.",
            },
            {
              label: "Asignar cuentas contables",
              description:
                "Verifica que las cuentas estén correctamente asignadas para reflejar la baja del medio anterior y el alta del nuevo.",
            },
            {
              label: "Confirmar y guardar el registro",
              description:
                "Haz clic en Aceptar para guardar el medio repuesto. El sistema generará automáticamente el comprobante contable correspondiente.",
            },
            {
              label: "Imprimir comprobante de reposición",
              description:
                "Haz clic en Imprimir para generar el comprobante contable de la operación de reposición.",
            },
          ],
        },
        {
          id: 13,
          aNombre: "Altas Masivas desde Excel",
          aResumen: `Este módulo permite importar múltiples activos fijos tangibles (AFT) desde una hoja de cálculo Excel, agilizando el proceso de registro inicial. Sirve para:

Cargar grandes volúmenes de medios en una sola operación, evitando el registro manual uno a uno.

Estandarizar la estructura de datos mediante una plantilla predefinida que garantiza consistencia y validación.

Generar automáticamente los comprobantes contables de cada medio importado.

Evitar errores de digitación y acelerar la incorporación de activos al sistema.`,
          pasos: [
            {
              label: "Acceder al módulo de Altas Masivas",
              description:
                "Desde el menú Operaciones, selecciona la opción Altas Masivas desde Excel para iniciar el proceso de importación.",
            },
            {
              label: "Descargar plantilla de Excel",
              description:
                "Haz clic en Plantilla para obtener el archivo con los campos requeridos: genérico, descripción, subgrupo, CNMB, tasa, centro de costo, área, subárea, responsable, valor, fecha, proveedor, etc.",
            },
            {
              label: "Completar la plantilla",
              description:
                "Llena la hoja de Excel respetando el formato y validaciones indicadas. No modifiques los encabezados ni el orden de las columnas.",
            },
            {
              label: "Importar archivo Excel",
              description:
                "Haz clic en Importar, selecciona el archivo completado y espera la validación automática del sistema.",
            },
            {
              label: "Revisar medios cargados",
              description:
                "Verifica que los medios hayan sido registrados correctamente. El sistema mostrará errores si hay campos inválidos.",
            },
            {
              label: "Confirmar y generar comprobantes",
              description:
                "Haz clic en Aceptar para confirmar la carga. Se generarán automáticamente los comprobantes contables de cada medio.",
            },
            {
              label: "Imprimir resumen de importación",
              description:
                "Haz clic en Imprimir para obtener un listado de los medios importados y sus comprobantes asociados.",
            },
          ],
        },
      ],
    },
  ],
};
