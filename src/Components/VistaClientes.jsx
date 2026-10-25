import React from 'react';

function VistaClientes() {
  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">👥 Directorio de Clientes Frecuentes</h2>
      <div className="card shadow-sm border-0 p-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0 fw-bold">Carlos Mendoza</h6>
              <small className="text-muted">carlos@email.com | Tel: 555-0192</small>
            </div>
            <span className="badge bg-primary rounded-pill">4 Visitas</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0 fw-bold">María López</h6>
              <small className="text-muted">maria@email.com | Tel: 555-4819</small>
            </div>
            <span className="badge bg-primary rounded-pill">2 Visitas</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0 fw-bold">Juan Pérez</h6>
              <small className="text-muted">juan@email.com | Tel: 555-9382</small>
            </div>
            <span className="badge bg-primary rounded-pill">5 Visitas</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VistaClientes;