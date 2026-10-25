import React from 'react';

function VistaClientes({ reservas = [] }) {
  const clientesMap = {};

  reservas.forEach((r) => {
    const nombre = r.cliente.trim();
    if (!clientesMap[nombre]) {
      clientesMap[nombre] = {
        nombre: nombre,
        email: `${nombre.toLowerCase().replace(/\s+/g, '')}@email.com`,
        visitas: 0,
      };
    }
    if (r.estado !== 'Cancelada') {
      clientesMap[nombre].visitas += 1;
    }
  });

  const listaClientes = Object.values(clientesMap);

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold"><i className="fa-solid fa-users text-info me-2"></i> Directorio de Clientes Frecuentes</h2>
      <p className="text-muted">Directorio actualizado automáticamente según el historial de reservas.</p>

      <div className="card shadow-sm border-0 p-4">
        <ul className="list-group list-group-flush">
          {listaClientes.length > 0 ? (
            listaClientes.map((cliente, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                <div>
                  <h6 className="mb-0 fw-bold">{cliente.nombre}</h6>
                  <small className="text-muted">{cliente.email}</small>
                </div>
                <span className="badge bg-primary rounded-pill">
                  {cliente.visitas} {cliente.visitas === 1 ? 'Reserva' : 'Reservas'}
                </span>
              </li>
            ))
          ) : (
            <li className="list-group-item text-center text-muted py-3">
              No hay clientes registrados aún.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default VistaClientes;