import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerPropiedadPorId } from '../api/propiedadservicio';
import Layout from '../componentes/layout/Layout';

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
        setPropiedad(datos);
      } catch (err) {
        setError('No se pudo cargar el detalle de la propiedad.');
      } finally {
        setCargando(false);
      }
    }
    cargarDetalle();
  }, [id]);

  if (cargando) return <Layout><div>Cargando detalle...</div></Layout>;
  if (error) return <Layout><div>{error}</div></Layout>;
  if (!propiedad) return null;

  return (
    <Layout>
      <h2>{propiedad.name}</h2>
      <img src={propiedad.imageUrl} alt={propiedad.name} style={{ maxWidth: '400px', width: '100%' }} />
      <p><strong>Dirección:</strong> {propiedad.address}</p>
      <p><strong>Precio:</strong> {propiedad.price.toLocaleString('es-CO', { style: 'currency', currency: 'USD' })}</p>
      <p><strong>ID del propietario:</strong> {propiedad.idOwner}</p>
      <p><strong>ID de la propiedad:</strong> {propiedad.id}</p>
    </Layout>
  );
}

export default DetallePropiedadPagina;