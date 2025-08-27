import axios from 'axios';

const URL_BASE_API = 'https://localhost:7181/api/ImagenPropiedad';

export async function obtenerImagen(idPropiedad) {
  try {
    const respuesta = await axios.get(`${URL_BASE_API}/${idPropiedad}`);
    const data = respuesta.data;
    // Concatenar la URL base si hay imagen
    return data.length > 0 ? `https://localhost:7181${data[0].archivo}` : null;
  } catch (error) {
    console.error('Error al obtener la imagen:', error);
    return null;
  }
}