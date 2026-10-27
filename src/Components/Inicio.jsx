import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 

function Inicio() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <Navbar />

        {/* HERO / PORTADA */}
        <header className="bg-dark py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2">Bienvenido a Mi Restaurante</h1>
                  <p className="lead fw-normal text-white-50 mb-4">Disfruta de la mejor gastronomía con auténticos sabores locales, preparados con ingredientes frescos y de la más alta calidad.</p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <Link className="btn btn-outline-warning btn-lg px-4 me-sm-3" to="/carta">Ver Carta</Link>
                    <Link className="btn btn-outline-light btn-lg px-4" to="/reserva">Reservar Mesa</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                {/* RUTA CORREGIDA CON process.env.PUBLIC_URL */}
                <img 
                  className="img-fluid rounded-3 shadow-lg" 
                  src={`${process.env.PUBLIC_URL}/imagen/portada1.jpg`} 
                  alt="Plato Principal" 
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* CARACTERÍSTICAS */}
        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              
              <div className="col-lg-4 mb-5 mb-lg-0 text-center text-lg-start">
                <div className="mb-3">
                  <img 
                    src={`${process.env.PUBLIC_URL}/imagen/portada2.jpg`} 
                    alt="Calidad Excepcional" 
                    className="rounded-circle shadow" 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                  />
                </div>
                <h2 className="h4 fw-bolder">Calidad Excepcional</h2>
                <p className="text-muted mb-0">Seleccionamos cuidadosamente cada ingrediente para garantizar el mejor sabor en cada plato que servimos.</p>
              </div>

              <div className="col-lg-4 mb-5 mb-lg-0 text-center text-lg-start">
                <div className="mb-3">
                  <img 
                    src={`${process.env.PUBLIC_URL}/imagen/portada3.jpg`} 
                    alt="Pasión por la Cocina" 
                    className="rounded-circle shadow" 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                  />
                </div>
                <h2 className="h4 fw-bolder">Pasión por la Cocina</h2>
                <p className="text-muted mb-0">Nuestros chefs combinan recetas tradicionales con técnicas modernas para sorprender tu paladar.</p>
              </div>

              <div className="col-lg-4 text-center text-lg-start">
                <div className="mb-3">
                  <img 
                    src={`${process.env.PUBLIC_URL}/imagen/portada4.jpg`} 
                    alt="Ambiente Acogedor" 
                    className="rounded-circle shadow" 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                  />
                </div>
                <h2 className="h4 fw-bolder">Ambiente Acogedor</h2>
                <p className="text-muted mb-0">Un espacio diseñado para que disfrutes momentos inolvidables en compañía de tu familia y amigos.</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Mi Restaurante 2026</div></div>
            <div className="col-auto">
              <Link className="link-light small me-2" to="/admin">Acceso Administración</Link>
              <a className="link-light small" href="#!">Privacy</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Inicio;