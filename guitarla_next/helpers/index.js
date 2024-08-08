import React from 'react'

const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);

  const opciones = {
   year : 'numeric',
   month : `long`,
   day : '2-digit'
  }

  return fechaNueva.toLocaleDateString('es-Es', opciones)
}

export default formatearFecha
