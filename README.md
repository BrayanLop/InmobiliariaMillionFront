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
VITE_API_URL=https://localhost:7181
```
> **Nota:** Si tu proyecto no fue creado con Vite, es posible que la variable de entorno deba llamarse `REACT_APP_API_URL`.

**4. Inicia el servidor de desarrollo:**
Una vez instaladas las dependencias y configurada la URL del API, puedes iniciar la aplicación.
```bash
npm run dev
```
> Si usas Create React App, el comando podría ser `npm start`.

La aplicación debería abrirse automáticamente en tu navegador en una dirección como `http://localhost:5173` o `http://localhost:3000`.

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
│   └── main.jsx          # Punto de entrada de la aplicación
├── .env                  # (Debes crearlo) Variables de entorno
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo
```

Con estas instrucciones, cualquier desarrollador podrá configurar y ejecutar tu proyecto frontend sin problemas.// filepath: c:\Users\braya\OneDrive\Escritorio\inmobiliariamillion\README.md
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
VITE_API_URL=https://localhost:7181
```
> **Nota:** Si tu proyecto no fue creado con Vite, es posible que la variable de entorno deba llamarse `REACT_APP_API_URL`.

**4. Inicia el servidor de desarrollo:**
Una vez instaladas las dependencias y configurada la URL del API, puedes iniciar la aplicación.
```bash
npm run dev
```
> Si usas Create React App, el comando podría ser `npm start`.

La aplicación debería abrirse automáticamente en tu navegador en una dirección como `http://localhost:5173` o `http://localhost:3000`.

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
│   └── main.jsx          # Punto de entrada de la aplicación
├── .env                  # (Debes crearlo) Variables de entorno
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo
```