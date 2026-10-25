import React from 'react';
import MetricCards from './MetricCards';

function Dashboard({ reservas = [], actividades = [] }) {
  // 1. GRÁFICO DE BARRAS
  const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const clientesPorDia = { Lun: 0, Mar: 0, Mié: 0, Jue: 0, Vie: 0, Sáb: 0, Dom: 0 };

  reservas.forEach((r) => {
    if (r.estado !== 'Cancelada' && r.fecha) {
      const fechaObj = new Date(r.fecha + 'T00:00:00');
      const numDia = fechaObj.getDay();
      const mapaDias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      const nombreDia = mapaDias[numDia];

      if (clientesPorDia[nombreDia] !== undefined) {
        clientesPorDia[nombreDia] += Number(r.personas || 0);
      }
    }
  });

  const maxClientesSemana = Math.max(...Object.values(clientesPorDia), 1);

  // 2. GRÁFICO CIRCULAR: 3 TURNOS
  let totalDesayuno = 0;
  let totalAlmuerzo = 0;
  let totalCena = 0;

  reservas.forEach((r) => {
    if (r.estado !== 'Cancelada') {
      const horaNum = parseInt((r.hora || '0').split(':')[0], 10);
      if (horaNum < 12) {
        totalDesayuno += Number(r.personas || 0);
      } else if (horaNum < 17) {
        totalAlmuerzo += Number(r.personas || 0);
      } else {
        totalCena += Number(r.personas || 0);
      }
    }
  });

  const totalComensales = totalDesayuno + totalAlmuerzo + totalCena || 1;
  const porcDesayuno = Math.round((totalDesayuno / totalComensales) * 100);
  const porcAlmuerzo = Math.round((totalAlmuerzo / totalComensales) * 100);
  const porcCena = Math.max(0, 100 - porcDesayuno - porcAlmuerzo);

  const finDesayuno = porcDesayuno;
  const finAlmuerzo = porcDesayuno + porcAlmuerzo;

  // 3. TABLA: Las 5 primeras (que ahora son las más recientes)
  const reservasRecientes = reservas.slice(0, 5);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="text-dark fw-bold m-0">Dashboard / Resumen General</h2>
          <small className="text-muted">Métricas de ocupación, afluencia semanal y actividad en vivo.</small>
        </div>
        <span className="badge bg-white text-secondary border shadow-sm px-3 py-2">
          <i className="fa-regular fa-calendar me-2 text-primary"></i>
          Semana en curso
        </span>
      </div>

      <MetricCards reservas={reservas} />

      {/* FILA DE GRÁFICOS */}
      <div className="row g-4 mb-4">
        
        {/* GRÁFICO 1: BARRAS */}
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="fw-bold mb-0">
                  <i className="fa-solid fa-chart-column text-primary me-2"></i>
                  Afluencia de Comensales por Día
                </h5>
                <small className="text-muted">Proyección de clientes activos durante la semana</small>
              </div>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 small">
                Pico: Sábado ({clientesPorDia['Sáb'] || 0})
              </span>
            </div>

            <div className="position-relative pt-4 pb-2 px-3" style={{ height: '210px' }}>
              <div className="position-absolute w-100 start-0 top-0 h-100 d-flex flex-column justify-content-between pe-3" style={{ pointerEvents: 'none', zIndex: 0 }}>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted" style={{ fontSize: '10px', width: '20px' }}>{maxClientesSemana}</span>
                  <div className="flex-grow-1 border-top border-secondary-subtle opacity-50" style={{ borderStyle: 'dashed' }}></div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted" style={{ fontSize: '10px', width: '20px' }}>{Math.round(maxClientesSemana / 2)}</span>
                  <div className="flex-grow-1 border-top border-secondary-subtle opacity-50" style={{ borderStyle: 'dashed' }}></div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted" style={{ fontSize: '10px', width: '20px' }}>0</span>
                  <div className="flex-grow-1 border-top border-secondary-subtle"></div>
                </div>
              </div>

              <div className="d-flex align-items-end justify-content-between h-100 ps-4 position-relative" style={{ zIndex: 1 }}>
                {diasSemana.map((dia) => {
                  const cantidad = clientesPorDia[dia];
                  const esPico = cantidad === maxClientesSemana && cantidad > 0;
                  const porcentaje = cantidad > 0 ? (cantidad / maxClientesSemana) * 100 : 0;

                  return (
                    <div key={dia} className="d-flex flex-column align-items-center" style={{ width: '11%' }}>
                      <div 
                        className="w-100 d-flex flex-column align-items-center justify-content-end position-relative" 
                        style={{ 
                          height: '140px', 
                          backgroundColor: '#f8fafc', 
                          borderRadius: '8px',
                          border: '1px solid #edf2f7'
                        }}
                      >
                        <div 
                          className="w-100 d-flex flex-column align-items-center justify-content-end"
                          style={{
                            height: `${Math.max(porcentaje, 18)}%`,
                            transition: 'height 0.4s ease'
                          }}
                        >
                          <span 
                            className={`badge px-1 py-0 mb-1 fw-bold ${esPico ? 'bg-primary text-white shadow-sm' : 'bg-white text-secondary border'}`}
                            style={{ fontSize: '10px' }}
                          >
                            {cantidad}
                          </span>
                          <div 
                            className="w-100"
                            style={{
                              height: '100%',
                              backgroundColor: esPico ? '#0d6efd' : '#3b82f6',
                              borderRadius: '6px 6px 4px 4px',
                            }}
                          ></div>
                        </div>
                      </div>
                      <span className={`small mt-2 ${esPico ? 'fw-bold text-primary' : 'text-muted'}`} style={{ fontSize: '12px' }}>
                        {dia}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        {/* GRÁFICO 2: CIRCULAR / DONUT */}
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="fw-bold mb-1">
              <i className="fa-solid fa-chart-pie text-warning me-2"></i>
              Distribución por Turnos
            </h5>
            <small className="text-muted mb-3">Proporción de comensales en Desayuno, Almuerzo y Cena</small>

            <div className="d-flex align-items-center justify-content-center my-auto gap-4">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center position-relative shadow-sm"
                style={{
                  width: '140px',
                  height: '140px',
                  background: `conic-gradient(#0dcaf0 0% ${finDesayuno}%, #0d6efd ${finDesayuno}% ${finAlmuerzo}%, #ffc107 ${finAlmuerzo}% 100%)`,
                }}
              >
                <div 
                  className="bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow-inner"
                  style={{ width: '85px', height: '85px' }}
                >
                  <span className="h4 fw-bold mb-0 text-dark">{totalComensales}</span>
                  <small className="text-muted" style={{ fontSize: '10px' }}>Clientes</small>
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge rounded-circle bg-info p-1" style={{ width: '10px', height: '10px' }}> </span>
                    <span className="small fw-bold">Desayuno</span>
                  </div>
                  <span className="small fw-bold text-info ms-3">{porcDesayuno}%</span>
                  <small className="text-muted ms-1">({totalDesayuno} pers.)</small>
                </div>

                <div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge rounded-circle bg-primary p-1" style={{ width: '10px', height: '10px' }}> </span>
                    <span className="small fw-bold">Almuerzo</span>
                  </div>
                  <span className="small fw-bold text-primary ms-3">{porcAlmuerzo}%</span>
                  <small className="text-muted ms-1">({totalAlmuerzo} pers.)</small>
                </div>

                <div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge rounded-circle bg-warning p-1" style={{ width: '10px', height: '10px' }}> </span>
                    <span className="small fw-bold">Cena</span>
                  </div>
                  <span className="small fw-bold text-warning ms-3">{porcCena}%</span>
                  <small className="text-muted ms-1">({totalCena} pers.)</small>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FILA INFERIOR: TABLA (ACTUALIZADA) + HISTORIAL DE ACTIVIDAD (REAL) */}
      <div className="row g-4">
        
        {/* TABLA: Siempre muestra las 5 reservas más recientes */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="fw-bold mb-3">Últimas Reservas Registradas</h5>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Cliente</th>
                    <th>Mesa</th>
                    <th>Fecha / Hora</th>
                    <th>Personas</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {reservasRecientes.length > 0 ? (
                    reservasRecientes.map((reserva) => (
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
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-muted py-3">No hay reservas recientes.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FEED DE ACTIVIDAD: Historial real de cambios */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="fw-bold mb-3">
              <i className="fa-solid fa-clock-rotate-left text-secondary me-2"></i>
              Actividad Reciente
            </h5>
            <div className="d-flex flex-column gap-3">
              {actividades.length > 0 ? (
                actividades.map((ev) => {
                  let icono = 'fa-solid fa-bell text-warning';
                  let bgBadge = 'bg-warning text-dark';

                  if (ev.tipo === 'reserva') {
                    icono = 'fa-solid fa-calendar-plus text-primary';
                    bgBadge = 'bg-primary text-white';
                  } else if (ev.tipo === 'mesa') {
                    icono = 'fa-solid fa-chair text-danger';
                    bgBadge = 'bg-danger text-white';
                  } else if (ev.tipo === 'plato') {
                    icono = 'fa-solid fa-utensils text-info';
                    bgBadge = 'bg-info text-white';
                  } else if (ev.tipo === 'confirmada') {
                    icono = 'fa-solid fa-circle-check text-success';
                    bgBadge = 'bg-success text-white';
                  }

                  return (
                    <div key={ev.id} className="d-flex align-items-start gap-3 border-bottom pb-2">
                      <div className="p-2 rounded-circle bg-light d-flex align-items-center justify-content-center shadow-sm" style={{ width: '36px', height: '36px' }}>
                        <i className={icono}></i>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center">
                          <strong className="small text-dark">{ev.titulo}</strong>
                          <span className={`badge ${bgBadge}`} style={{ fontSize: '9px' }}>{ev.tipo}</span>
                        </div>
                        <p className="text-muted mb-0" style={{ fontSize: '11px' }}>{ev.detalle}</p>
                        <small className="text-secondary" style={{ fontSize: '10px' }}>{ev.hora}</small>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center text-muted py-4 small">Sin actividad registrada.</div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;