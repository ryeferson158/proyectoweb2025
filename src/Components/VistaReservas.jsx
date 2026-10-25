import React, { useState, useEffect } from 'react';

function VistaReservas({ reservas, busqueda, setBusqueda, cambiarEstado, agregarReserva }) {
  const [modoVista, setModoVista] = useState('tabla');
  const [mostrarModal, setMostrarModal] = useState(false);
  
  const [fechaCalendario, setFechaCalendario] = useState('2026-10-19');
  const [reservasDelDia, setReservasDelDia] = useState([]);

  // Horarios de Desayuno (09:00, 10:30), Almuerzo (13:00, 14:00) y Cena (20:30, 21:00)
  const horarios = ['09:00', '10:30', '13:00', '14:00', '20:30', '21:00'];
  const mesas = [1, 2, 3, 4];

  const [form, setForm] = useState({
    cliente: '',
    fecha: '2026-10-19',
    hora: '09:00',
    personas: 2,
    mesa: 1
  });

  useEffect(() => {
    const filtradas = reservas.filter(
      r => r.fecha === fechaCalendario && r.estado !== 'Cancelada'
    );
    setReservasDelDia(filtradas);
  }, [fechaCalendario, reservas]);

  const obtenerReservaEnTurno = (mesa, hora) => {
    return reservasDelDia.find(r => Number(r.mesa) === mesa && r.hora === hora);
  };

  const reservasFiltradas = reservas ? reservas.filter(r => 
    r.cliente.toLowerCase().includes((busqueda || '').toLowerCase())
  ) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const exito = agregarReserva(form);
    if (exito) {
      setForm({ cliente: '', fecha: '2026-10-19', hora: '09:00', personas: 2, mesa: 1 });
      setMostrarModal(false);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="text-dark fw-bold m-0">📅 Control y Gestión de Reservas</h2>
          <p className="text-muted mb-0">Supervisa las solicitudes en formato de lista o agenda horaria.</p>
        </div>
        <div className="d-flex gap-2">
          <div className="btn-group">
            <button 
              className={`btn btn-sm ${modoVista === 'tabla' ? 'btn-dark' : 'btn-outline-secondary'}`}
              onClick={() => setModoVista('tabla')}
            >
              📋 Vista Lista
            </button>
            <button 
              className={`btn btn-sm ${modoVista === 'calendario' ? 'btn-dark' : 'btn-outline-secondary'}`}
              onClick={() => setModoVista('calendario')}
            >
              🗓️ Vista Calendario
            </button>
          </div>

          <button className="btn btn-primary btn-sm fw-bold" onClick={() => setMostrarModal(true)}>
            ＋ Nueva Reserva
          </button>
        </div>
      </div>

      {modoVista === 'tabla' && (
        <>
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Buscar reserva por cliente..." 
              value={busqueda || ''}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="card shadow-sm border-0 p-3">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Cliente</th>
                    <th>Mesa</th>
                    <th>Fecha / Hora</th>
                    <th>Personas</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {reservasFiltradas.length > 0 ? (
                    reservasFiltradas.map((reserva) => (
                      <tr key={reserva.id}>
                        <td className="fw-bold">{reserva.cliente}</td>
                        <td><span className="badge bg-light text-dark border">Mesa 0{reserva.mesa}</span></td>
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
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-success me-1"
                            onClick={() => cambiarEstado(reserva.id, 'Confirmada')}
                          >
                            Aprobar
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => cambiarEstado(reserva.id, 'Cancelada')}
                          >
                            Cancelar
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center text-muted py-4">No se encontraron reservas registradas.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {modoVista === 'calendario' && (
        <div className="card shadow-sm border-0 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <h5 className="fw-bold mb-1">Agenda y Ocupación por Turnos</h5>
              <small className="text-muted">Horarios de Desayuno (09:00 - 10:30), Almuerzo (13:00 - 14:00) y Cena (20:30 - 21:00).</small>
            </div>
            
            <div className="d-flex align-items-center gap-2">
              <label className="fw-bold small text-secondary">Fecha:</label>
              <input 
                type="date" 
                className="form-control form-control-sm"
                value={fechaCalendario}
                onChange={(e) => setFechaCalendario(e.target.value)}
              />
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
              <thead className="table-light">
                <tr>
                  <th style={{ width: '15%' }}>Hora</th>
                  {mesas.map(m => (
                    <th key={m} style={{ width: '21%' }}>Mesa 0{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {horarios.map((hora) => (
                  <tr key={hora}>
                    <td className="fw-bold bg-light">{hora}</td>
                    {mesas.map((mesa) => {
                      const ocupada = obtenerReservaEnTurno(mesa, hora);
                      return (
                        <td key={mesa} className={ocupada ? 'bg-danger-subtle' : 'bg-success-subtle'}>
                          {ocupada ? (
                            <div>
                              <span className="badge bg-danger mb-1">Ocupada</span>
                              <div className="small fw-bold text-dark">{ocupada.cliente}</div>
                              <small className="text-muted">{ocupada.personas} personas</small>
                            </div>
                          ) : (
                            <div>
                              <span className="badge bg-success">Disponible</span>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {mostrarModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow border-0">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Registrar Nueva Reserva</h5>
                <button type="button" className="btn-close" onClick={() => setMostrarModal(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-2">
                    <label className="form-label small fw-bold">Nombre del Cliente</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      required 
                      value={form.cliente} 
                      onChange={(e) => setForm({ ...form, cliente: e.target.value })} 
                    />
                  </div>
                  <div className="row g-2 mb-2">
                    <div className="col-6">
                      <label className="form-label small fw-bold">Fecha</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        required 
                        value={form.fecha} 
                        onChange={(e) => setForm({ ...form, fecha: e.target.value })} 
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold">Turno / Hora</label>
                      <select 
                        className="form-select"
                        value={form.hora}
                        onChange={(e) => setForm({ ...form, hora: e.target.value })}
                      >
                        <optgroup label="🍳 Desayuno">
                          <option value="09:00">09:00 AM</option>
                          <option value="10:30">10:30 AM</option>
                        </optgroup>
                        <optgroup label="🍲 Almuerzo">
                          <option value="13:00">01:00 PM (13:00)</option>
                          <option value="14:00">02:00 PM (14:00)</option>
                        </optgroup>
                        <optgroup label="🍷 Cena">
                          <option value="20:30">08:30 PM (20:30)</option>
                          <option value="21:00">09:00 PM (21:00)</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div className="row g-2 mb-2">
                    <div className="col-6">
                      <label className="form-label small fw-bold">Personas</label>
                      <input 
                        type="number" 
                        min="1" 
                        className="form-control" 
                        value={form.personas} 
                        onChange={(e) => setForm({ ...form, personas: e.target.value })} 
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold">Mesa Asignada</label>
                      <select 
                        className="form-select" 
                        value={form.mesa} 
                        onChange={(e) => setForm({ ...form, mesa: e.target.value })}
                      >
                        <option value="1">Mesa 01</option>
                        <option value="2">Mesa 02</option>
                        <option value="3">Mesa 03</option>
                        <option value="4">Mesa 04</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => setMostrarModal(false)}>Cancelar</button>
                  <button type="submit" className="btn btn-primary btn-sm fw-bold">Guardar Reserva</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VistaReservas;