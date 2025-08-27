import React, { useEffect, useState } from 'react';
import TarjetaPropiedad from './TarjetaPropiedad';
import { obtenerImagen } from '../../api/imagenpropiedad';
import styles from './ListaPropiedad.module.css';

/**
 * Componente que muestra la lista de propiedades.
 * @param {Object} props
 * @param {Array} props.propiedades - Lista de propiedades
 * @param {boolean} props.cargando - Estado de carga
 * @param {string} props.error - Mensaje de error (opcional)
 */
function ListaPropiedad({ propiedades, cargando, error }) {
  const [propiedadesConImagen, setPropiedadesConImagen] = useState([]);

  useEffect(() => {
    async function cargarImagenes() {
      const nuevasPropiedades = await Promise.all(
        propiedades.map(async (propiedad) => {
          const urlImagen = await obtenerImagen(propiedad.idPropiedad);
          return { ...propiedad, urlImagen };
        })
      );
      setPropiedadesConImagen(nuevasPropiedades);
    }
    cargarImagenes();
  }, [propiedades]);

  if (cargando) {
    return <div className={styles.cargando}>Cargando propiedades...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!propiedadesConImagen || propiedadesConImagen.length === 0) {
    return <div className={styles.vacio}>No se encontraron propiedades.</div>;
  }

  return (
    <div className={styles.listaPropiedad}>
      {propiedadesConImagen.map((propiedad) => (
        <TarjetaPropiedad propiedad={propiedad} key={propiedad.idPropiedad} />
      ))}
    </div>
  );
}

export default ListaPropiedad;