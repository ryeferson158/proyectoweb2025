import React from 'react';
import Dashboard from './Dashboard';
import VistaReservas from './VistaReservas';
import VistaMesas from './VistaMesas';
import VistaClientes from './VistaClientes';
import VistaConfiguracion from './VistaConfiguracion';

function Panel({ reservas, busqueda, setBusqueda, cambiarEstado, vistaActiva, setVistaActiva }) {
  return (
    <div className="d-flex" id="wrapper" style={{ minHeight: '100vh', backgroundColor: '#f8f9fc' }}>
      
      {/* BARRA LATERAL (SIDEBAR INTERACTIVA) */}
      <nav id="sidebar" className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h4 className="text-warning py-3 text-center fw-bold">🍽️ RestoAdmin</h4>
        <hr className="text-secondary" />
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <button 
              onClick={() => setVistaActiva('dashboard')}
              className={`nav-link text-start w-100 border-0 ${vistaActiva === 'dashboard' ? 'active bg-primary text-white' : 'text-white-50 bg-transparent'}`}
            >
              📊 Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => setVistaActiva('reservas')}
              className={`nav-link text-start w-100 border-0 ${vistaActiva === 'reservas' ? 'active bg-primary text-white' : 'text-white-50 bg-transparent'}`}
            >
              📅 Reservas
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => setVistaActiva('mesas')}
              className={`nav-link text-start w-100 border-0 ${vistaActiva === 'mesas' ? 'active bg-primary text-white' : 'text-white-50 bg-transparent'}`}
            >
              🪑 Mesas
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => setVistaActiva('clientes')}
              className={`nav-link text-start w-100 border-0 ${vistaActiva === 'clientes' ? 'active bg-primary text-white' : 'text-white-50 bg-transparent'}`}
            >
              👥 Clientes
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => setVistaActiva('config')}
              className={`nav-link text-start w-100 border-0 ${vistaActiva === 'config' ? 'active bg-primary text-white' : 'text-white-50 bg-transparent'}`}
            >
              ⚙️ Configuración
            </button>
          </li>
        </ul>
      </nav>

      {/* CONTENIDO PRINCIPAL DINÁMICO */}
      <div id="page-content-wrapper" className="w-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3 shadow-sm">
          <span className="navbar-brand fw-bold text-secondary">Panel de Gestión de Reservas</span>
          <div className="ms-auto text-muted small">Administrador (Restaurante Central)</div>
        </nav>

        <div className="container-fluid p-4">
          
          {vistaActiva === 'dashboard' && (
            <Dashboard 
              reservas={reservas} 
              busqueda={busqueda} 
              setBusqueda={setBusqueda} 
              cambiarEstado={cambiarEstado} 
            />
          )}

          {vistaActiva === 'reservas' && (
            <VistaReservas 
              reservas={reservas} 
              busqueda={busqueda} 
              setBusqueda={setBusqueda} 
              cambiarEstado={cambiarEstado} 
            />
          )}

          {vistaActiva === 'mesas' && <VistaMesas />}

          {vistaActiva === 'clientes' && <VistaClientes />}

          {vistaActiva === 'config' && <VistaConfiguracion />}

        </div>
      </div>
    </div>
  );
}

export default Panel;