import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerPropiedadPorId } from '../../api/propiedadservicio';
import Layout from '../../componentes/layout/Layout';
import styles from './detallePropiedadPagina.module.css';
import { obtenerImagen } from '../../api/imagenpropiedad';

function DetallePropiedadPagina() {
  const { id } = useParams();
  const [propiedad, setPropiedad] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function cargarDetalle() {
      setCargando(true);
      setError('');
      try {
        const datos = await obtenerPropiedadPorId(id);
        const urlImagen = await obtenerImagen(id);
        setPropiedad({ ...datos, imagen: urlImagen });
      } catch (err) {
        setError('No se pudo cargar el detalle de la propiedad.');
      } finally {
        setCargando(false);
      }
    }
    cargarDetalle();
  }, [id]);

  if (cargando) return <Layout><div className={styles.loading}>Cargando detalle...</div></Layout>;
  if (error) return <Layout><div className={styles.error}>{error}</div></Layout>;
  if (!propiedad) return null;

  return (
    <Layout>
      <div className={styles.contenedor}>
        <div className={styles.detallePropiedad}>
          <img 
            src={propiedad.imagen} 
            alt={propiedad.nombre}
            className={styles.imagenPrincipal}
          />
          <h1 className={styles.titulo}>{propiedad.nombre}</h1>
          <div className={styles.ubicacion}>
            <strong>Ubicación</strong>
            <p>{propiedad.direccion}</p>
          </div>
          <div className={styles.precio}>
            {propiedad.precio 
              ? `US$ ${propiedad.precio.toLocaleString()}`
              : 'Precio no disponible'}
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span>Código de Propiedad</span>
              <strong>{propiedad.codigoInterno}</strong>
            </div>
            <div className={styles.infoItem}>
              <span>Año de Construcción</span>
              <strong>{propiedad.anio}</strong>
            </div>
          </div>
          <div className={styles.caracteristicasGrid}>
            <div className={styles.caracteristica}>3 Habitaciones</div>
            <div className={styles.caracteristica}>2 Baños</div>
            <div className={styles.caracteristica}>120 m²</div>
            <div className={styles.caracteristica}>Parqueadero</div>
          </div>
          <div className={styles.botones}>
            <button className={styles.botonPrimario}>Contactar agente</button>
            <button className={styles.botonSecundario}>Agendar visita</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetallePropiedadPagina;
