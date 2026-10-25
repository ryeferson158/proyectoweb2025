import React from 'react';
import TablaReservas from './TablaReservas';

function VistaReservas({ reservas, busqueda, setBusqueda, cambiarEstado }) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-dark fw-bold m-0">📅 Control y Registro de Reservas</h2>
        <button className="btn btn-primary btn-sm fw-bold">＋ Nueva Reserva</button>
      </div>
      <p className="text-muted">Aquí puedes administrar todas las solicitudes de los comensales, aprobar pendientes o cancelar turnos.</p>
      <TablaReservas 
        reservas={reservas} 
        busqueda={busqueda} 
        setBusqueda={setBusqueda} 
        cambiarEstado={cambiarEstado} 
      />
    </div>
  );
}

export default VistaReservas;
