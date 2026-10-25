import React from 'react';

function VistaClientes() {
  const clientes = [
    { id: 1, nombre: 'Carlos Mendoza', email: 'carlos@email.com', tel: '555-0192', visitas: 4 },
    { id: 2, nombre: 'María López', email: 'maria@email.com', tel: '555-4819', visitas: 2 },
    { id: 3, nombre: 'Juan Pérez', email: 'juan@email.com', tel: '555-9382', visitas: 5 }
  ];

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">👥 Directorio de Clientes Frecuentes</h2>
      <div className="card shadow-sm border-0 p-4">
        <ul className="list-group list-group-flush">
          {clientes.map(c => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={c.id}>
              <div>
                <h6 className="mb-0 fw-bold">{c.nombre}</h6>
                <small className="text-muted">{c.email} | Tel: {c.tel}</small>
              </div>
              <span className="badge bg-primary rounded-pill">{c.visitas} Visitas</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VistaClientes;