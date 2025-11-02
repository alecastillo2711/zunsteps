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
          aResume: `Este módulo permite registrar y administrar las cuentas contables
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
          aResume: `Este módulo permite definir los centros de costo de la entidad, asociarles cuentas contables específicas y establecer el tipo de control de inventario. Sirve para:

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
          aResume: `Este módulo permite definir los genéricos de activos fijos tangibles (AFT), asociarles cuentas contables y tasas de depreciación, y generar automáticamente los submayores vinculados. Sirve para:

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
          aResume: `Este módulo permite definir las áreas y subáreas de cada centro de costo, incluyendo sus responsables. Sirve para:

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
          aResume: `Este módulo permite definir y visualizar la información institucional básica de la entidad que opera el sistema. Sirve para:

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
          aResume: `Este módulo permite gestionar el inventario físico de los activos fijos tangibles (AFT), incluyendo su apertura inicial y cierre. Sirve para:

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
          aResume: `Este módulo permite clasificar los activos fijos tangibles (AFT) en subgrupos y asociarlos con códigos del CNMB (Clasificador Nacional de Bienes). Sirve para:

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
          aResume: `Este módulo permite definir las plantillas contables predeterminadas que se aplicarán a cada tipo de movimiento de activos fijos tangibles (AFT). Sirve para:

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
  ],
};
