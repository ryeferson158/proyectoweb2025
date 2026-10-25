
import React from 'react';
function MetricCards() {
  return (
    <div className="row g-3 mb-4">
      <div className="col-xl-3 col-md-6">
        <div className="card text-white bg-primary shadow-sm h-100 py-2 border-0">
          <div className="card-body">
            <div className="text-xs fw-bold text-uppercase mb-1">Reservas de Hoy</div>
            <div className="h5 mb-0 fw-bold">12 Registradas</div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="card text-dark bg-warning shadow-sm h-100 py-2 border-0">
          <div className="card-body">
            <div className="text-xs fw-bold text-uppercase mb-1">Pendientes de Confirmar</div>
            <div className="h5 mb-0 fw-bold">3 Por Aprobar</div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="card text-white bg-success shadow-sm h-100 py-2 border-0">
          <div className="card-body">
            <div className="text-xs fw-bold text-uppercase mb-1">Confirmadas</div>
            <div className="h5 mb-0 fw-bold">8 Activas</div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="card text-white bg-danger shadow-sm h-100 py-2 border-0">
          <div className="card-body">
            <div className="text-xs fw-bold text-uppercase mb-1">Canceladas</div>
            <div className="h5 mb-0 fw-bold">1 Incidencia</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricCards;