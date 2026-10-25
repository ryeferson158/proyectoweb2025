import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Panel from './Components/Panel';

function App() {
  // Lista inicial de reservas
  const [reservas, setReservas] = useState([
    { id: 1, cliente: 'Carlos Mendoza', fecha: '2026-10-19', hora: '09:00', personas: 2, mesa: 1, estado: 'Confirmada' },
    { id: 2, cliente: 'Lucía Fernández', fecha: '2026-10-19', hora: '14:00', personas: 4, mesa: 2, estado: 'Confirmada' },
    { id: 3, cliente: 'Roberto Silva', fecha: '2026-10-20', hora: '13:30', personas: 3, mesa: 1, estado: 'Confirmada' },
    { id: 4, cliente: 'María López', fecha: '2026-10-21', hora: '20:30', personas: 5, mesa: 3, estado: 'Confirmada' },
    { id: 5, cliente: 'Javier Morales', fecha: '2026-10-22', hora: '09:30', personas: 3, mesa: 3, estado: 'Confirmada' },
    { id: 6, cliente: 'Elena Ríos', fecha: '2026-10-22', hora: '14:00', personas: 2, mesa: 2, estado: 'Pendiente' },
    { id: 7, cliente: 'Andrea Castro', fecha: '2026-10-23', hora: '21:00', personas: 6, mesa: 4, estado: 'Confirmada' },
    { id: 8, cliente: 'Marcos Soto', fecha: '2026-10-24', hora: '10:00', personas: 4, mesa: 2, estado: 'Confirmada' },
    { id: 9, cliente: 'Juan Pérez', fecha: '2026-10-24', hora: '20:30', personas: 8, mesa: 4, estado: 'Confirmada' },
    { id: 10, cliente: 'Ana Torres', fecha: '2026-10-25', hora: '13:15', personas: 4, mesa: 3, estado: 'Confirmada' },
    { id: 11, cliente: 'Pedro Vargas', fecha: '2026-10-25', hora: '21:00', personas: 3, mesa: 1, estado: 'Cancelada' }
  ]);

  // HISTORIAL GLOBAL DE ACTIVIDAD EN TIEMPO REAL
  const [actividades, setActividades] = useState([
    { id: 1, tipo: 'mesa', titulo: 'Mesa 01 liberada', detalle: 'Cancelación de Pedro Vargas', hora: '21:00' },
    { id: 2, tipo: 'reserva', titulo: 'Nueva reserva registrada', detalle: 'Ana Torres en Mesa 03', hora: '13:15' },
    { id: 3, tipo: 'plato', titulo: 'Plato "Causa Rellena"', detalle: 'Marcado como AGOTADO en cocina', hora: '12:00' },
  ]);

  // Función JS para registrar cualquier evento en el sistema
  const registrarActividad = (tipo, titulo, detalle) => {
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const nuevoEvento = {
      id: Date.now(),
      tipo, // 'reserva', 'mesa', 'plato', 'confirmada'
      titulo,
      detalle,
      hora: `Hoy ${horaFormateada}`,
    };

    // Lo agregamos AL INICIO para que siempre salga el más nuevo arriba
    setActividades(prev => [nuevoEvento, ...prev.slice(0, 5)]);
  };

  const [busqueda, setBusqueda] = useState('');
  const [vistaActiva, setVistaActiva] = useState('dashboard');

  // Función para cambiar estado con registro en el historial
  const cambiarEstado = (id, nuevoEstado) => {
    const reservaAfectada = reservas.find(r => r.id === id);

    const actualizadas = reservas.map(res => 
      res.id === id ? { ...res, estado: nuevoEstado } : res
    );
    setReservas(actualizadas);

    // Registramos en el historial si se confirmó o se liberó la mesa
    if (reservaAfectada) {
      if (nuevoEstado === 'Cancelada') {
        registrarActividad('mesa', `Mesa 0${reservaAfectada.mesa} Liberada`, `Reserva de ${reservaAfectada.cliente} cancelada`);
      } else if (nuevoEstado === 'Confirmada') {
        registrarActividad('confirmada', `Reserva Confirmada`, `${reservaAfectada.cliente} asegurada en Mesa 0${reservaAfectada.mesa}`);
      }
    }
  };

  // Función para registrar nueva reserva (se añade al INICIO de la lista)
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

    // AL PONER reservaCreada PRIMERO, APARECERÁ INMEDIATAMENTE ARRIBA EN LA TABLA
    setReservas([reservaCreada, ...reservas]);

    // Registramos el evento en el historial
    registrarActividad('reserva', 'Nueva Reserva Registrada', `${nueva.cliente} (Mesa 0${nueva.mesa} - ${nueva.hora})`);

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
      actividades={actividades}
      registrarActividad={registrarActividad}
    />
  );
}

export default App;