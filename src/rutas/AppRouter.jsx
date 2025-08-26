import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropiedadesPagina from '../paginas/propiedadesPagina';
import DetallePropiedadPagina from '../paginas/detallePropiedadPagina';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropiedadesPagina />} />
        <Route path="/property/:id" element={<DetallePropiedadPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;