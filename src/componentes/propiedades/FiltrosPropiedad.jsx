import React from 'react';

function FiltrosPropiedad({ valores, onCambio }) {
  return (
    <form className="d-flex gap-3 mb-3 flex-wrap">
      <input
        type="text"
        className="form-control"
        style={{ maxWidth: 200 }}
        placeholder="Nombre"
        value={valores.nombre || ''}
        onChange={e => onCambio({ ...valores, nombre: e.target.value })}
      />
      <input
        type="text"
        className="form-control"
        style={{ maxWidth: 200 }}
        placeholder="Dirección"
        value={valores.direccion || ''}
        onChange={e => onCambio({ ...valores, direccion: e.target.value })}
      />
      <input
        type="number"
        className="form-control"
        style={{ maxWidth: 150 }}
        placeholder="Precio mínimo"
        value={valores.precioMinimo || ''}
        onChange={e => onCambio({ ...valores, precioMinimo: e.target.value })}
        min={0}
      />
      <input
        type="number"
        className="form-control"
        style={{ maxWidth: 150 }}
        placeholder="Precio máximo"
        value={valores.precioMaximo || ''}
        onChange={e => onCambio({ ...valores, precioMaximo: e.target.value })}
        min={0}
      />
    </form>
  );
}

export default FiltrosPropiedad;  