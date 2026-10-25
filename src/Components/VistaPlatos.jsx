import React, { useState } from 'react';

function VistaPlatos() {
  const [platos, setPlatos] = useState([
    { id: 1, nombre: 'Lomo Saltado', categoria: 'Fondos', precio: 45.00, estado: 'Disponible' },
    { id: 2, nombre: 'Ceviche Clásico', categoria: 'Entradas', precio: 38.00, estado: 'Disponible' },
    { id: 3, nombre: 'Causa Rellena', categoria: 'Entradas', precio: 22.00, estado: 'Agotado' },
    { id: 4, nombre: 'Pisco Sour Tradicional', categoria: 'Bebidas', precio: 25.00, estado: 'Disponible' },
    { id: 5, nombre: 'Suspiro a la Limeña', categoria: 'Postres', precio: 18.00, estado: 'Disponible' },
  ]);

  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  // Alternar disponibilidad
  const toggleEstado = (id) => {
    setPlatos(platos.map(p => 
      p.id === id ? { ...p, estado: p.estado === 'Disponible' ? 'Agotado' : 'Disponible' } : p
    ));
  };

  // Filtro
  const platosFiltrados = platos.filter(p => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCat = categoria === 'Todos' || p.categoria === categoria;
    return coincideNombre && coincideCat;
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-dark fw-bold m-0">🍽️ Carta y Menú del Restaurante</h2>
      </div>
      <p className="text-muted">Controla la disponibilidad en cocina de los platillos ofrecidos.</p>

      {/* Barra de búsqueda y categorías */}
      <div className="card shadow-sm border-0 p-3 mb-4">
        <div className="row g-2 align-items-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar plato por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <div className="col-md-6 d-flex gap-1 justify-content-md-end flex-wrap">
            {['Todos', 'Entradas', 'Fondos', 'Bebidas', 'Postres'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm ${categoria === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setCategoria(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="row g-3">
        {platosFiltrados.map((plato) => (
          <div className="col-md-4" key={plato.id}>
            <div className={`card shadow-sm border-0 h-100 p-3 ${plato.estado === 'Agotado' ? 'bg-light opacity-75' : ''}`}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="badge bg-secondary">{plato.categoria}</span>
                <span className={`badge ${plato.estado === 'Disponible' ? 'bg-success' : 'bg-danger'}`}>
                  {plato.estado}
                </span>
              </div>
              <h5 className="fw-bold mb-1">{plato.nombre}</h5>
              <h4 className="text-primary fw-bold mb-3">S/ {plato.precio.toFixed(2)}</h4>
              <div className="mt-auto pt-2 border-top d-flex justify-content-end">
                <button
                  className={`btn btn-sm ${plato.estado === 'Disponible' ? 'btn-outline-danger' : 'btn-outline-success'}`}
                  onClick={() => toggleEstado(plato.id)}
                >
                  {plato.estado === 'Disponible' ? 'Marcar Agotado' : 'Habilitar Plato'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VistaPlatos;