import React from 'react';

function VistaMesas({ reservas = [] }) {
  const mesasBase = [
    { id: 1, numero: 'Mesa 01', capacidad: 4 },
    { id: 2, numero: 'Mesa 02', capacidad: 2 },
    { id: 3, numero: 'Mesa 03', capacidad: 4 },
    { id: 4, numero: 'Mesa 04', capacidad: 6 },
  ];

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">🪑 Estado y Disponibilidad de Mesas</h2>
      <p className="text-muted mb-4">Estado en tiempo real calculado según las reservas activas.</p>
      
      <div className="row g-3">
        {mesasBase.map((mesa) => {
          const reservaActiva = reservas.find(
            (r) => r.mesa === mesa.id && r.estado !== 'Cancelada'
          );

          const estaOcupada = Boolean(reservaActiva);

          return (
            <div className="col-md-3" key={mesa.id}>
              <div className={`card ${estaOcupada ? 'border-danger' : 'border-success'} shadow-sm p-3 text-center`}>
                <h5 className="fw-bold">{mesa.numero}</h5>
                <span className={`badge ${estaOcupada ? 'bg-danger' : 'bg-success'} mb-2`}>
                  {estaOcupada ? 'Ocupada / Reservada' : 'Disponible'}
                </span>
                <p className="small text-muted mb-0">
                  {estaOcupada 
                    ? `Cliente: ${reservaActiva.cliente} (${reservaActiva.hora})` 
                    : `Capacidad: ${mesa.capacidad} personas`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VistaMesas;