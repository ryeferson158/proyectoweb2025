import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container px-5">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-shop me-2 text-warning"></i>Mi Restaurante
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door me-1"></i> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/promociones">
                <i className="bi bi-tag me-1"></i> Promociones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carta">
                <i className="bi bi-book me-1"></i> Nuestra carta
              </Link>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link className="btn btn-warning text-dark fw-bold px-3 shadow-sm" to="/reserva">
                <i className="bi bi-calendar-check me-1"></i> Reserva
              </Link>
            </li>

            {/* Acceso al Panel Administrativo */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link className="btn btn-outline-light btn-sm px-2" to="/admin" title="Panel de Administración">
                <i className="fa-solid fa-lock me-1"></i> Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
