import React from 'react';

function VistaReservas({ reservas, busqueda, setBusqueda, cambiarEstado }) {
  // Filtramos las reservas según la búsqueda
  const reservasFiltradas = reservas ? reservas.filter(r => 
    r.nombre.toLowerCase().includes(busqueda ? busqueda.toLowerCase() : '')
  ) : [];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-dark fw-bold m-0">📅 Control y Registro de Reservas</h2>
        <button className="btn btn-primary btn-sm fw-bold">＋ Nueva Reserva</button>
      </div>
      <p className="text-muted">Aquí puedes administrar todas las solicitudes de los comensales, aprobar pendientes o cancelar turnos.</p>
      
      {/* Buscador */}
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Buscar reserva por nombre..." 
          value={busqueda || ''}
          onChange={(e) => setBusqueda && setBusqueda(e.target.value)}
        />
      </div>

      {/* Tabla de Reservas */}
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Cliente</th>
                <th>Fecha / Hora</th>
                <th>Mesa</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservasFiltradas.length > 0 ? (
                reservasFiltradas.map((reserva, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{reserva.nombre}</td>
                    <td>{reserva.fecha} - {reserva.hora}</td>
                    <td>Mesa {reserva.mesa}</td>
                    <td>
                      <span className={`badge ${
                        reserva.estado === 'Confirmada' ? 'bg-success' : 
                        reserva.estado === 'Pendiente' ? 'bg-warning text-dark' : 'bg-danger'
                      }`}>
                        {reserva.estado}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-success me-1"
                        onClick={() => cambiarEstado && cambiarEstado(index, 'Confirmada')}
                      >
                        Aprobar
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => cambiarEstado && cambiarEstado(index, 'Cancelada')}
                      >
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">No se encontraron reservas registradas.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VistaReservas;