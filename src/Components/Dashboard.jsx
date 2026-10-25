import React from 'react';
import MetricCards from './MetricCards';

function Dashboard({ reservas, busqueda, setBusqueda, cambiarEstado }) {
  const reservasRecientes = reservas ? reservas.slice(0, 5) : [];

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Dashboard / Resumen General</h2>
      <MetricCards />
      
      <div className="card shadow-sm border-0 p-4 mt-4">
        <h5 className="fw-bold mb-3">Últimas Reservas Registradas</h5>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Cliente</th>
                <th>Fecha / Hora</th>
                <th>Personas</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {reservasRecientes.length > 0 ? (
                reservasRecientes.map((reserva, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{reserva.cliente}</td>
                    <td>{reserva.fecha} - {reserva.hora}</td>
                    <td>{reserva.personas} comensales</td>
                    <td>
                      <span className={`badge ${
                        reserva.estado === 'Confirmada' ? 'bg-success' : 
                        reserva.estado === 'Pendiente' ? 'bg-warning text-dark' : 'bg-danger'
                      }`}>
                        {reserva.estado}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-3">No hay reservas recientes.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
