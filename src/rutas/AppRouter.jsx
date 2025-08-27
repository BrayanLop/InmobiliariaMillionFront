import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropiedadesPagina from '../paginas/propiedades/propiedadesPagina';
import DetallePropiedadPagina from '../paginas/propiedades/detallePropiedadPagina';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropiedadesPagina />} />
        <Route path="/propiedad/:id" element={<DetallePropiedadPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;