import React from 'react';

function TablaReservas({ reservas, busqueda, setBusqueda, cambiarEstado }) {
  const reservasFiltradas = reservas.filter(r => 
    r.cliente.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
        <h5 className="m-0 fw-bold text-primary">📋 Listado y Control de Reservas</h5>
        <div className="input-group" style={{ width: '300px' }}>
          <input 
            type="text" 
            className="form-control form-control-sm" 
            placeholder="Buscar por cliente..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>
      
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Personas</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservasFiltradas.length > 0 ? (
                reservasFiltradas.map((r) => (
                  <tr key={r.id}>
                    <td className="fw-bold">{r.cliente}</td>
                    <td>{r.fecha}</td>
                    <td>{r.hora}</td>
                    <td>{r.personas} comensales</td>
                    <td>
                      <span className={`badge ${
                        r.estado === 'Confirmada' ? 'bg-success' :
                        r.estado === 'Pendiente' ? 'bg-warning text-dark' : 'bg-danger'
                      }`}>
                        {r.estado}
                      </span>
                    </td>
                    <td>
                      {r.estado !== 'Confirmada' && (
                        <button 
                          className="btn btn-sm btn-outline-success me-1"
                          onClick={() => cambiarEstado(r.id, 'Confirmada')}
                        >
                          Confirmar
                        </button>
                      )}
                      {r.estado !== 'Cancelada' && (
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => cambiarEstado(r.id, 'Cancelada')}
                        >
                          Cancelar
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-3">No se encontraron reservas con ese nombre.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TablaReservas;