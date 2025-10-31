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
  ],
};
