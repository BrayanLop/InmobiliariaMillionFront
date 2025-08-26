import axios from 'axios';

// URL base de la API de propiedades
const URL_BASE_API = 'https://localhost:7181/api/';
//const URL_BASE_API = 'https://localhost:7181/api/Propiedad/Obtener';

/**
 * Obtiene la lista de propiedades desde la API, aplicando filtros si se proporcionan.
 * @param {Object} filtros - Filtros de búsqueda (nombre, dirección, precio mínimo, precio máximo)
 * @returns {Promise<Array>} - Lista de propiedades
 */
export async function obtenerPropiedades(filtros = {}) {
  try {
    const params = {};
    if (filtros.nombre) params.name = filtros.nombre;
    if (filtros.direccion) params.address = filtros.direccion;
    if (filtros.precioMinimo) params.minPrice = filtros.precioMinimo;
    if (filtros.precioMaximo) params.maxPrice = filtros.precioMaximo;

    const respuesta = await axios.get(URL_BASE_API, { params });
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

/**
 * Obtiene el detalle de una propiedad por su ID.
 * @param {string} id - ID de la propiedad
 * @returns {Promise<Object>} - Detalle de la propiedad
 */
export async function obtenerPropiedadPorId(id) {
  try {
    const respuesta = await axios.get(`${URL_BASE_API}/${id}`);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}