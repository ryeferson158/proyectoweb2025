import React, { useState } from 'react';

function VistaMesas({ reservas = [] }) {
  // 1. Estados para filtrar la disponibilidad por fecha y turno
  const [fechaSeleccionada, setFechaSeleccionada] = useState('2026-10-19');
  const [turnoSeleccionado, setTurnoSeleccionado] = useState('Todos');

  // Las 4 mesas físicas del restaurante
  const mesasBase = [
    { id: 1, numero: 'Mesa 01', capacidad: 4, ubicacion: 'Salón Principal' },
    { id: 2, numero: 'Mesa 02', capacidad: 2, ubicacion: 'Junto a la Ventana' },
    { id: 3, numero: 'Mesa 03', capacidad: 4, ubicacion: 'Terraza' },
    { id: 4, numero: 'Mesa 04', capacidad: 6, ubicacion: 'Zona VIP' },
  ];

  return (
    <div>
      {/* ENCABEZADO */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="mb-1 text-dark fw-bold">
            <i className="fa-solid fa-chair text-primary me-2"></i>
            Estado y Disponibilidad de Mesas
          </h2>
          <p className="text-muted mb-0">Verifica la ocupación de mesas en tiempo real según la fecha y turno seleccionado.</p>
        </div>
      </div>

      {/* BARRA DE FILTRO POR FECHA Y TURNO */}
      <div className="card shadow-sm border-0 p-3 mb-4">
        <div className="row g-3 align-items-center">
          
          {/* Selector de Fecha */}
          <div className="col-md-4 d-flex align-items-center gap-2">
            <label className="fw-bold small text-secondary mb-0">Fecha:</label>
            <input 
              type="date" 
              className="form-control form-control-sm"
              value={fechaSeleccionada}
              onChange={(e) => setFechaSeleccionada(e.target.value)}
            />
          </div>

          {/* Filtro por Turno */}
          <div className="col-md-8 d-flex justify-content-md-end gap-1 flex-wrap align-items-center">
            <span className="small text-muted me-2 fw-semibold">Turno:</span>
            {['Todos', 'Desayuno', 'Almuerzo', 'Cena'].map((turno) => (
              <button
                key={turno}
                type="button"
                className={`btn btn-sm ${turnoSeleccionado === turno ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setTurnoSeleccionado(turno)}
              >
                {turno}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* CUADRÍCULA DE MESAS (FILTRADA POR FECHA) */}
      <div className="row g-3">
        {mesasBase.map((mesa) => {
          // Buscamos las reservas activas de esta mesa EN LA FECHA SELECCIONADA
          const reservasDeMesaEnFecha = reservas.filter((r) => {
            const coincideMesa = Number(r.mesa) === mesa.id;
            const noCancelada = r.estado !== 'Cancelada';
            const coincideFecha = r.fecha === fechaSeleccionada;

            if (!coincideMesa || !noCancelada || !coincideFecha) return false;

            // Filtro por turno si no es 'Todos'
            if (turnoSeleccionado === 'Todos') return true;
            const horaNum = parseInt((r.hora || '0').split(':')[0], 10);
            if (turnoSeleccionado === 'Desayuno') return horaNum < 12;
            if (turnoSeleccionado === 'Almuerzo') return horaNum >= 12 && horaNum < 17;
            if (turnoSeleccionado === 'Cena') return horaNum >= 17;

            return true;
          });

          // La mesa está ocupada si tiene al menos una reserva activa en ese filtro
          const estaOcupada = reservasDeMesaEnFecha.length > 0;
          const primerReserva = reservasDeMesaEnFecha[0];

          return (
            <div className="col-md-6 col-lg-3" key={mesa.id}>
              <div className={`card ${estaOcupada ? 'border-danger' : 'border-success'} shadow-sm p-3 text-center h-100`}>
                
                {/* Cabecera de la mesa */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-light text-muted border">{mesa.ubicacion}</span>
                  <small className="text-secondary fw-semibold">Cap: {mesa.capacidad} pers.</small>
                </div>

                <h4 className="fw-bold my-2">{mesa.numero}</h4>

                {/* Badge de estado */}
                <span className={`badge ${estaOcupada ? 'bg-danger' : 'bg-success'} mb-3 py-2`}>
                  {estaOcupada ? 'Ocupada / Reservada' : 'Disponible'}
                </span>

                {/* Detalle dinámico según la fecha */}
                <div className="mt-auto pt-2 border-top">
                  {estaOcupada ? (
                    <div>
                      <p className="small fw-bold text-danger mb-0">
                        <i className="fa-solid fa-user me-1"></i> {primerReserva.cliente}
                      </p>
                      <small className="text-muted d-block">
                        <i className="fa-regular fa-clock me-1"></i> {primerReserva.hora} ({primerReserva.personas} comensales)
                      </small>
                      {reservasDeMesaEnFecha.length > 1 && (
                        <span className="badge bg-warning text-dark mt-1" style={{ fontSize: '9px' }}>
                          +{reservasDeMesaEnFecha.length - 1} reserva(s) más este día
                        </span>
                      )}
                    </div>
                  ) : (
                    <p className="small text-success mb-0 fw-semibold">
                      <i className="fa-solid fa-circle-check me-1"></i> Mesa 100% libre en esta fecha
                    </p>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VistaMesas;