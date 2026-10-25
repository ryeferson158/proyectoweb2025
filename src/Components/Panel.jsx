import React from 'react';
import Dashboard from './Dashboard';
import VistaReservas from './VistaReservas';
import VistaMesas from './VistaMesas';
import VistaPlatos from './VistaPlatos';
import VistaClientes from './VistaClientes';
import VistaConfiguracion from './VistaConfiguracion';

function Panel({ 
  reservas, 
  busqueda, 
  setBusqueda, 
  cambiarEstado, 
  agregarReserva, 
  vistaActiva, 
  setVistaActiva,
  actividades,
  registrarActividad 
}) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-pie' },
    { id: 'reservas', label: 'Reservas', icon: 'fa-solid fa-calendar-days' },
    { id: 'mesas', label: 'Mesas', icon: 'fa-solid fa-chair' },
    { id: 'platos', label: 'Platos / Carta', icon: 'fa-solid fa-bowl-food' },
    { id: 'clientes', label: 'Clientes', icon: 'fa-solid fa-users' },
    { id: 'config', label: 'Configuración', icon: 'fa-solid fa-gear' },
  ];

  return (
    <div className="d-flex" id="wrapper" style={{ minHeight: '100vh', backgroundColor: '#f8f9fc' }}>
      
      {/* SIDEBAR LATERAL */}
      <nav id="sidebar" className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h4 className="text-warning py-3 text-center fw-bold">
          <i className="fa-solid fa-utensils me-2"></i> RestoAdmin
        </h4>
        <hr className="text-secondary" />
        <ul className="nav flex-column gap-2">
          {menuItems.map(item => (
            <li className="nav-item" key={item.id}>
              <button
                onClick={() => setVistaActiva(item.id)}
                className={`nav-link text-start w-100 border-0 ${vistaActiva === item.id ? 'active bg-primary text-white' : 'text-white-50 bg-transparent'}`}
              >
                <i className={`${item.icon} me-2`} style={{ width: '20px' }}></i> 
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div id="page-content-wrapper" className="w-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3 shadow-sm">
          <span className="navbar-brand fw-bold text-secondary">
            <i className="fa-solid fa-bell-concierge me-2 text-primary"></i>
            Panel de Gestión de Reservas
          </span>
          <div className="ms-auto text-muted small">
            <i className="fa-solid fa-user-shield me-1"></i> Administrador (Restaurante Central)
          </div>
        </nav>

        <div className="container-fluid p-4">
          {/* Dashboard ahora recibe las actividades reales */}
          {vistaActiva === 'dashboard' && <Dashboard reservas={reservas} actividades={actividades} />}

          {vistaActiva === 'reservas' && (
            <VistaReservas 
              reservas={reservas} 
              busqueda={busqueda} 
              setBusqueda={setBusqueda} 
              cambiarEstado={cambiarEstado} 
              agregarReserva={agregarReserva}
            />
          )}

          {vistaActiva === 'mesas' && <VistaMesas reservas={reservas} />}

          {/* VistaPlatos recibe registrarActividad para avisar cuando un plato se agota */}
          {vistaActiva === 'platos' && <VistaPlatos registrarActividad={registrarActividad} />}

          {vistaActiva === 'clientes' && <VistaClientes reservas={reservas} />}

          {vistaActiva === 'config' && <VistaConfiguracion />}
        </div>
      </div>
    </div>
  );
}

export default Panel;