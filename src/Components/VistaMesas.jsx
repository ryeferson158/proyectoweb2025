import React from 'react';

function VistaMesas() {
  const mesas = [
    { id: 1, numero: 'Mesa 01', estado: 'Disponible', detalle: 'Capacidad: 4 personas', color: 'success' },
    { id: 2, numero: 'Mesa 02', estado: 'Ocupada', detalle: 'Comensales: Carlos Mendoza', color: 'danger' },
    { id: 3, numero: 'Mesa 03', estado: 'Reservada', detalle: 'Para las 20:30 hrs', color: 'warning text-dark' },
    { id: 4, numero: 'Mesa 04', estado: 'Disponible', detalle: 'Capacidad: 6 personas', color: 'success' },
  ];

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">🪑 Estado y Disponibilidad de Mesas</h2>
      <p className="text-muted mb-4">Distribución en tiempo real del salón principal y terraza.</p>
      
      <div className="row g-3">
        {mesas.map((mesa) => (
          <div className="col-md-3" key={mesa.id}>
            <div className={`card border-${mesa.color.split(' ')[0]} shadow-sm p-3 text-center`}>
              <h5 className="fw-bold">{mesa.numero}</h5>
              <span className={`badge bg-${mesa.color} mb-2`}>
                {mesa.estado}
              </span>
              <p className="small text-muted mb-0">{mesa.detalle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VistaMesas;