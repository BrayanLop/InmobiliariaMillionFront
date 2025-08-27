import React from 'react';
import TarjetaPropiedad from './TarjetaPropiedad.jsx';
import styles from './ListaPropiedad.module.css';

/**
 * Componente que muestra la lista de propiedades.
 * @param {Object} props
 * @param {Array} props.propiedades - Lista de propiedades
 * @param {boolean} props.cargando - Estado de carga
 * @param {string} props.error - Mensaje de error (opcional)
 */
function ListaPropiedad({ propiedades, cargando, error }) {
  if (cargando) {
    return <div className={styles.cargando}>Cargando propiedades...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!propiedades || propiedades.length === 0) {
    return <div className={styles.vacio}>No se encontraron propiedades.</div>;
  }

  return (
    <div className={styles.listaPropiedad}>
      {propiedades.map(propiedad => (
        <TarjetaPropiedad key={propiedad.id} propiedad={propiedad} />
      ))}
    </div>
  );
}

export default ListaPropiedad;