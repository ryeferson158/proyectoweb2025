import React from 'react';

function VistaMesas() {
  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">🪑 Estado y Disponibilidad de Mesas</h2>
      <p className="text-muted mb-4">Distribución en tiempo real del salón principal y terraza.</p>
      
      <div className="row g-3">
        <div className="col-md-3">
          <div className="card border-success shadow-sm p-3 text-center">
            <h5>Mesa 01</h5>
            <span className="badge bg-success mb-2">Disponible</span>
            <p className="small text-muted mb-0">Capacidad: 4 personas</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-danger shadow-sm p-3 text-center">
            <h5>Mesa 02</h5>
            <span className="badge bg-danger mb-2">Ocupada</span>
            <p className="small text-muted mb-0">Comensales: Carlos Mendoza</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-warning shadow-sm p-3 text-center">
            <h5>Mesa 03</h5>
            <span className="badge bg-warning text-dark mb-2">Reservada</span>
            <p className="small text-muted mb-0">Para las 20:30 hrs</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-success shadow-sm p-3 text-center">
            <h5>Mesa 04</h5>
            <span className="badge bg-success mb-2">Disponible</span>
            <p className="small text-muted mb-0">Capacidad: 6 personas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistaMesas;