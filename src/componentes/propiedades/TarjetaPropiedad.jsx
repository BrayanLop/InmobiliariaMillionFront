import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TarjetaPropiedad.module.css';

function TarjetaPropiedad({ propiedad }) {
  return (
    <Link to={`/property/${propiedad.idPropiedad}`} className={styles.card}>
      <img
        src="#"
        alt={propiedad.nombre}
        className={styles.imagen}
      />
      <div className={styles.info}>
        <h3 className={styles.nombre}>{propiedad.nombre}</h3>
        <p className={styles.direccion}>{propiedad.direccion}</p>
        <p className={styles.precio}>
          {propiedad.precio
            ? propiedad.precio.toLocaleString('es-CO', { style: 'currency', currency: 'USD' })
            : '$0.00'}
        </p>
        <p className={styles.codigo}>Código: {propiedad.codigoInterno}</p>
        <p className={styles.anio}>Año: {propiedad.anio}</p>
      </div>
    </Link>
  );
}

export default TarjetaPropiedad;