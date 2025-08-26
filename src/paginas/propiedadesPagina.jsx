import React, { useEffect, useState } from 'react';
import FiltroPropiedad from '../componentes/propiedades/FiltrosPropiedad';
import ListaPropiedad from '../componentes/propiedades/ListaPropiedad';
import useDebounce from '../hooks/useDebounce';
import { obtenerPropiedades } from '../api/propiedadservicio';
import Layout from '../componentes/layout/Layout';

function PropiedadesPagina() {
  const [filtros, setFiltros] = useState({});
  const [propiedades, setPropiedades] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  const filtrosDebounced = useDebounce(filtros, 600);

  useEffect(() => {
    async function cargarPropiedades() {
      setCargando(true);
      setError('');
      try {
        const datos = await obtenerPropiedades(filtrosDebounced);
        setPropiedades(datos);
      } catch (err) {
        setError('No se pudieron cargar las propiedades.');
      } finally {
        setCargando(false);
      }
    }
    cargarPropiedades();
  }, [filtrosDebounced]);

  return (
    <Layout>
      <section style={{
        maxWidth: '900px',
        margin: '2rem auto',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 'bold',
          color: '#0077b6',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Encuentra tu propiedad ideal
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#555',
          marginBottom: '2rem'
        }}>
          Filtra por nombre, dirección o rango de precios y descubre las mejores opciones para ti.
        </p>
        <div style={{ marginBottom: '2rem' }}>
          <FiltroPropiedad valores={filtros} onCambio={setFiltros} />
        </div>
        <ListaPropiedad propiedades={propiedades} cargando={cargando} error={error} />
      </section>
    </Layout>
  );
}

export default PropiedadesPagina;