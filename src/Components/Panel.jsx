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
    { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
  ];

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar Lateral */}
      <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: '250px' }}>
        <h4 className="fw-bold mb-4 text-warning">🍽️ RestoAdmin</h4>
        
        <ul className="nav nav-pills flex-column gap-1">
          {menuItems.map(item => (
            <li className="nav-item" key={item.id}>
              <button
                className={`btn w-100 text-start text-white py-2 ${vistaActiva === item.id ? 'btn-primary' : 'btn-dark'}`}
                onClick={() => setVistaActiva(item.id)}
              >
                <span className="me-2">{item.icon}</span> {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenedor Principal */}
      <div className="flex-grow-1 bg-light d-flex flex-column">
        {/* Topbar Superior */}
        <div className="bg-white px-4 py-3 border-bottom d-flex justify-content-between align-items-center shadow-sm">
          <span className="text-secondary fw-semibold">Panel de Gestión de Reservas</span>
          <span className="badge bg-light text-dark border">Administrador (Restaurante Central)</span>
        </div>

        {/* Vista Renderizada */}
        <div className="p-4 flex-grow-1">
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
          {vistaActiva === 'mesas' && <VistaMesas reservas={reservas} />}
          {vistaActiva === 'platos' && <VistaPlatos />}
          {vistaActiva === 'clientes' && <VistaClientes />}
          {vistaActiva === 'configuracion' && <VistaConfiguracion />}
        </div>
      </div>
    </div>
  );
}

export default Panel;