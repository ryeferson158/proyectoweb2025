import React from 'react';
import MetricCards from './MetricCards';
import TablaReservas from './TablaReservas';

function Panel({ reservas, busqueda, setBusqueda, cambiarEstado }) {
  return (
    <div className="d-flex" id="wrapper" style={{ minHeight: '100vh', backgroundColor: '#f8f9fc' }}>
      
      {/* Barra Lateral (Sidebar) */}
      <nav id="sidebar" className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h4 className="text-warning py-3 text-center fw-bold">🍽️ RestoAdmin</h4>
        <hr className="text-secondary" />
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <a href="#dashboard" className="nav-link text-white active bg-primary rounded">📊 Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="#reservas" className="nav-link text-white-50">📅 Reservas</a>
          </li>
          <li className="nav-item">
            <a href="#mesas" className="nav-link text-white-50">🪑 Mesas</a>
          </li>
          <li className="nav-item">
            <a href="#clientes" className="nav-link text-white-50">👥 Clientes</a>
          </li>
          <li className="nav-item">
            <a href="#config" className="nav-link text-white-50">⚙️ Configuración</a>
          </li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <div id="page-content-wrapper" className="w-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3 shadow-sm">
          <span className="navbar-brand fw-bold text-secondary">Panel de Gestión de Reservas</span>
          <div className="ms-auto text-muted small">Administrador (Restaurante Central)</div>
        </nav>

        <div className="container-fluid p-4">
          <h2 className="mb-4 text-dark fw-bold">Dashboard / Resumen General</h2>
          
          {/* Tarjetas de Métricas */}
          <MetricCards />

          {/* Tabla de Reservas */}
          <TablaReservas 
            reservas={reservas} 
            busqueda={busqueda} 
            setBusqueda={setBusqueda} 
            cambiarEstado={cambiarEstado} 
          />
        </div>
      </div>
    </div>
  );
}

export default Panel;