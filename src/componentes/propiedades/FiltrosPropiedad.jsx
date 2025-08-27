import React from 'react';
import styles from './FiltrosPropiedad.module.css';

function FiltrosPropiedad({ valores, onChange }) {
  return (
    <div className={styles.filtrosContainer}>
      <div className={styles.filtrosGrid}>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={valores.nombre || ''}
          onChange={e => onChange({ ...valores, nombre: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Dirección"
          value={valores.direccion || ''}
          onChange={e => onChange({ ...valores, direccion: e.target.value })}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Precio mínimo"
          value={valores.precioMinimo || ''}
          onChange={e => onChange({ ...valores, precioMinimo: e.target.value })}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Precio máximo"
          value={valores.precioMaximo || ''}
          onChange={e => onChange({ ...valores, precioMaximo: e.target.value })}
        />
      </div>
    </div>
  );
}

export default FiltrosPropiedad;