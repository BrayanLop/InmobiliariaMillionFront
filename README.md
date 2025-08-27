# Inmobiliaria Million - Frontend

Este es el repositorio del frontend para la aplicación de Inmobiliaria Million, una plataforma para buscar, filtrar y ver detalles de propiedades. La aplicación está construida con React y se conecta a un backend para obtener toda la información.

## Tecnologías Utilizadas

*   **React:** Biblioteca principal para la construcción de la interfaz de usuario.
*   **React Router:** Para la gestión de rutas y navegación entre páginas.
*   **Axios:** Para realizar las peticiones HTTP al API del backend.
*   **CSS Modules:** Para un estilo de componentes encapsulado y sin colisiones.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:
*   [Node.js](https://nodejs.org/es/) (versión 16 o superior)
*   [npm](https://www.npmjs.com/) (se instala automáticamente con Node.js)
*   Tener el **backend del proyecto clonado y en ejecución**.

## Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local.

**1. Clona el repositorio:**
```bash
git clone <URL-del-repositorio>
cd inmobiliariamillion
```

**2. Instala las dependencias:**
Ejecuta el siguiente comando para instalar todos los paquetes necesarios para el proyecto.
```bash
npm install
```

**3. Configura la conexión con el API:**
Este proyecto necesita saber la URL base de tu backend para poder hacer las consultas.

*   Crea un archivo llamado `.env` en la raíz del proyecto.
*   Copia el siguiente contenido en el archivo `.env` y asegúrate de que la URL coincida con la de tu backend en ejecución.

```env
# URL base del API del backend
REACT_APP_API_URL=https://localhost:7181
```

**4. Inicia el servidor de desarrollo:**
Una vez instaladas las dependencias y configurada la URL del API, puedes iniciar la aplicación.
```bash
npm start
```

La aplicación debería abrirse automáticamente en tu navegador en una dirección como `http://localhost:3000`.

## API Backend

Este proyecto consume un API REST para obtener los datos de las propiedades. La documentación completa de los endpoints se puede encontrar en la siguiente dirección (mientras el backend esté en ejecución):

*   **Documentación de API (Swagger):** `https://localhost:7181/swagger`

## Solución de Problemas

**Error de CORS (Cross-Origin Resource Sharing)**

Si ves errores de CORS en la consola del navegador, significa que el backend no está configurado para aceptar peticiones desde la dirección del frontend (`http://localhost:3000`).

**Solución:** Asegúrate de que en la configuración del backend (por ejemplo, en el archivo `Program.cs` si es un proyecto .NET) se esté permitiendo explícitamente el origen `http://localhost:3000`.

## Estructura del Proyecto

```
inmobiliariamillion/
├── public/               # Archivos estáticos
├── src/
│   ├── api/              # Lógica para las llamadas al API (ej: propiedadservicio.js)
│   ├── componentes/      # Componentes reutilizables (Layout, TarjetaPropiedad, Filtros)
│   ├── hooks/            # Hooks personalizados (ej: useDebounce)
│   ├── paginas/          # Componentes que representan páginas completas (Propiedades, Detalle)
│   ├── App.jsx           # Componente principal y enrutador
│   └── index.js          # Punto de entrada de la aplicación
├── .env                  # (Debes crearlo)
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo