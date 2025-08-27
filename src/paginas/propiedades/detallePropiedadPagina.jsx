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

          {/* --- COLUMNA IZQUIERDA: IMAGEN Y BOTONES --- */}
          <div className={styles.columnaImagen}>
            <img 
              src={propiedad.imagen} 
              alt={propiedad.nombre}
              className={styles.imagenPrincipal}
            />
            {/* BOTONES MOVIDOS AQUÍ */}
            <div className={styles.botones}>
              <button className={styles.botonPrimario}>Contactar agente</button>
              <button className={styles.botonSecundario}>Agendar visita</button>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: INFORMACIÓN --- */}
          <div className={styles.columnaInfo}>
            <h1 className={styles.titulo}>{propiedad.nombre}</h1>
            <p className={styles.ubicacion}>{propiedad.direccion}</p>
            <p className={styles.precio}>
              {propiedad.precio 
                ? `US$ ${propiedad.precio.toLocaleString()}`
                : 'Precio no disponible'}
            </p>

            <div className={styles.caracteristicasGrid}>
              <div className={styles.caracteristica}><strong>3</strong> Habitaciones</div>
              <div className={styles.caracteristica}><strong>2</strong> Baños</div>
              <div className={styles.caracteristica}><strong>120 m²</strong> Área</div>
              <div className={styles.caracteristica}><strong>Sí</strong> Parqueadero</div>
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

            {/* EL DIV DE BOTONES SE ELIMINA DE AQUÍ */}
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default DetallePropiedadPagina;
