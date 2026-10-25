import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Panel from './Components/Panel';

function App() {
  const [reservas, setReservas] = useState([
    { id: 1, cliente: 'Carlos Mendoza', fecha: '2026-10-25', hora: '14:00', personas: 4, estado: 'Confirmada' },
    { id: 2, cliente: 'María López', fecha: '2026-10-25', hora: '20:30', personas: 2, estado: 'Pendiente' },
    { id: 3, cliente: 'Juan Pérez', fecha: '2026-10-26', hora: '13:15', personas: 6, estado: 'Confirmada' },
    { id: 4, cliente: 'Ana Torres', fecha: '2026-10-26', hora: '21:00', personas: 3, estado: 'Cancelada' }
  ]);

  const [busqueda, setBusqueda] = useState('');
  
  // NUEVO ESTADO: Controla qué pestaña está abierta en el menú lateral
  const [vistaActiva, setVistaActiva] = useState('dashboard');

  const cambiarEstado = (id, nuevoEstado) => {
    setReservas(reservas.map(r => r.id === id ? { ...r, estado: nuevoEstado } : r));
  };

  return (
    <Panel 
      reservas={reservas}
      busqueda={busqueda}
      setBusqueda={setBusqueda}
      cambiarEstado={cambiarEstado}
      vistaActiva={vistaActiva}
      setVistaActiva={setVistaActiva}
    />
  );
}

export default App;