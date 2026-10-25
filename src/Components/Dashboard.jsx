import React from 'react';
import MetricCards from './MetricCards';
import TablaReservas from './TablaReservas';

function Dashboard({ reservas, busqueda, setBusqueda, cambiarEstado }) {
  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Dashboard / Resumen General</h2>
      <MetricCards />
      <TablaReservas 
        reservas={reservas} 
        busqueda={busqueda} 
        setBusqueda={setBusqueda} 
        cambiarEstado={cambiarEstado} 
      />
    </div>
  );
}

export default Dashboard;