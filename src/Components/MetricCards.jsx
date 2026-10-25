import React from 'react';

function MetricCards({ reservas = [] }) {
  // Conteo automático en JS
  const totalHoy = reservas.length;
  const pendientes = reservas.filter(r => r.estado === 'Pendiente').length;
  const confirmadas = reservas.filter(r => r.estado === 'Confirmada').length;
  const canceladas = reservas.filter(r => r.estado === 'Cancelada').length;

  return (
    <div className="row g-3 mb-4">
      <div className="col-xl-3 col-md-6">
        <div className="card text-white bg-primary shadow-sm h-100 py-2 border-0">
          <div className="card-body">
            <div className="small fw-bold text-uppercase mb-1">Reservas Totales</div>
            <div className="h5 mb-0 fw-bold">{totalHoy} Registradas</div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="card text-dark bg-warning shadow-sm h-100 py-2 border-0">
          <div className="card-body">
            <div className="small fw-bold text-uppercase mb-1">Pendientes</div>
            <div className="h5 mb-0 fw-bold">{pendientes} Por Aprobar</div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="card text-white bg-success shadow-sm h-100 py-2 border-0">
          <div className="card-body">
            <div className="small fw-bold text-uppercase mb-1">Confirmadas</div>
            <div className="h5 mb-0 fw-bold">{confirmadas} Activas</div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="card text-white bg-danger shadow-sm h-100 py-2 border-0">
          <div className="card-body">
            <div className="small fw-bold text-uppercase mb-1">Canceladas</div>
            <div className="h5 mb-0 fw-bold">{canceladas} Incidencias</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricCards;