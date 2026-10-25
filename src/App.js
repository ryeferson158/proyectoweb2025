import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Panel from './Components/Panel';

function App() {
  // Lista central de reservas con su mesa asignada
  const [reservas, setReservas] = useState([
    { id: 1, cliente: 'Carlos Mendoza', fecha: '2026-10-25', hora: '14:00', personas: 4, mesa: 2, estado: 'Confirmada' },
    { id: 2, cliente: 'María López', fecha: '2026-10-25', hora: '20:30', personas: 2, mesa: 3, estado: 'Pendiente' },
    { id: 3, cliente: 'Juan Pérez', fecha: '2026-10-26', hora: '13:15', personas: 6, mesa: 4, estado: 'Confirmada' },
    { id: 4, cliente: 'Ana Torres', fecha: '2026-10-26', hora: '21:00', personas: 3, mesa: 1, estado: 'Cancelada' }
  ]);

  const [busqueda, setBusqueda] = useState('');
  const [vistaActiva, setVistaActiva] = useState('dashboard');

  // Función JS para aprobar o cancelar reservas
  const cambiarEstado = (id, nuevoEstado) => {
    const actualizadas = reservas.map(res => 
      res.id === id ? { ...res, estado: nuevoEstado } : res
    );
    setReservas(actualizadas);
  };

  // Función JS para registrar nueva reserva evitando duplicados (Rúbrica)
  const agregarReserva = (nueva) => {
    const existeConflicto = reservas.some(r => 
      r.mesa === Number(nueva.mesa) && 
      r.fecha === nueva.fecha && 
      r.hora === nueva.hora &&
      r.estado !== 'Cancelada'
    );

    if (existeConflicto) {
      alert(`⚠️ Conflicto: La Mesa 0${nueva.mesa} ya está ocupada el ${nueva.fecha} a las ${nueva.hora}.`);
      return false;
    }

    const reservaCreada = {
      id: Date.now(),
      ...nueva,
      mesa: Number(nueva.mesa),
      personas: Number(nueva.personas),
      estado: 'Pendiente'
    };

    setReservas([...reservas, reservaCreada]);
    alert('¡Reserva registrada con éxito!');
    return true;
  };

  return (
    <Panel 
      reservas={reservas}
      busqueda={busqueda}
      setBusqueda={setBusqueda}
      cambiarEstado={cambiarEstado}
      agregarReserva={agregarReserva}
      vistaActiva={vistaActiva}
      setVistaActiva={setVistaActiva}
    />
  );
}

export default App;