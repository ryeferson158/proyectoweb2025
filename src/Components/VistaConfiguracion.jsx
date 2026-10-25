import React from 'react';

function VistaConfiguracion() {
  const handleGuardar = (e) => {
    e.preventDefault();
    alert('Configuración guardada correctamente.');
  };

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">⚙️ Configuración General del Sistema</h2>
      <div className="card shadow-sm border-0 p-4">
        <form onSubmit={handleGuardar}>
          <div className="mb-3">
            <label className="form-label fw-bold">Nombre del Restaurante</label>
            <input type="text" className="form-control" defaultValue="Restaurante Central" />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Horario de Atención</label>
            <input type="text" className="form-control" defaultValue="12:00 PM - 11:00 PM" />
          </div>
          <button type="submit" className="btn btn-success">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}

export default VistaConfiguracion;