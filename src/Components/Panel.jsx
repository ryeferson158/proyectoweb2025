import React from 'react';
import Dashboard from './Dashboard';
import VistaReservas from './VistaReservas';
import VistaMesas from './VistaMesas';
import VistaPlatos from './VistaPlatos';
import VistaClientes from './VistaClientes';
import VistaConfiguracion from './VistaConfiguracion';

function Panel({ reservas, busqueda, setBusqueda, cambiarEstado, agregarReserva, vistaActiva, setVistaActiva }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'reservas', label: 'Reservas', icon: '📅' },
    { id: 'mesas', label: 'Mesas', icon: '🪑' },
    { id: 'platos', label: 'Platos / Carta', icon: '🍽️' },
    { id: 'clientes', label: 'Clientes', icon: '👥' },
    { id: 'config', label: 'Configuración', icon: '⚙️' },
  ];

  return (
    <div className="d-flex" id="wrapper" style={{ minHeight: '100vh', backgroundColor: '#f8f9fc' }}>
      
      {/* SIDEBAR LATERAL */}
      <nav id="sidebar" className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h4 className="text-warning py-3 text-center fw-bold">🍽️ RestoAdmin</h4>
        <hr className="text-secondary" />
        <ul className="nav flex-column gap-2">
          {menuItems.map(item => (
            <li className="nav-item" key={item.id}>
              <button
                onClick={() => setVistaActiva(item.id)}
                className={`nav-link text-start w-100 border-0 ${vistaActiva === item.id ? 'active bg-primary text-white' : 'text-white-50 bg-transparent'}`}
              >
                <span className="me-2">{item.icon}</span> {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div id="page-content-wrapper" className="w-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3 shadow-sm">
          <span className="navbar-brand fw-bold text-secondary">Panel de Gestión de Reservas</span>
          <div className="ms-auto text-muted small">Administrador (Restaurante Central)</div>
        </nav>

        <div className="container-fluid p-4">
          {vistaActiva === 'dashboard' && <Dashboard reservas={reservas} />}

          {vistaActiva === 'reservas' && (
            <VistaReservas 
              reservas={reservas} 
              busqueda={busqueda} 
              setBusqueda={setBusqueda} 
              cambiarEstado={cambiarEstado} 
              agregarReserva={agregarReserva}
            />
          )}

          {/* Sincronizados con reservas */}
          {vistaActiva === 'mesas' && <VistaMesas reservas={reservas} />}

          {vistaActiva === 'platos' && <VistaPlatos />}

          {vistaActiva === 'clientes' && <VistaClientes reservas={reservas} />}

          {vistaActiva === 'config' && <VistaConfiguracion />}
        </div>
      </div>
    </div>
  );
}

export default Panel;