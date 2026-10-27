import React from 'react';
import Navbar from './Navbar'; 

function Carta() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <Navbar />

        <header className="bg-dark py-5">
          <div className="container px-5 text-center">
            <h1 className="display-5 fw-bolder text-white mb-2">Nuestra Carta</h1>
            <p className="lead fw-normal text-white-50 mb-0">Descubre nuestros deliciosos platos preparados con auténtica pasión.</p>
          </div>
        </header>

        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h2 className="fw-bolder">Especialidades</h2>
              <p className="lead fw-normal text-muted">Elige tu platillo favorito</p>
            </div>
            
            <div className="row gx-5 justify-content-center">
              {/* PLATO 1 */}
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img 
                    className="card-img-top" 
                    src={`${process.env.PUBLIC_URL}/imagen/plato1.jpg`} 
                    alt="Lomo Saltado" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title fw-bold m-0">Lomo Saltado</h5>
                      <span className="text-primary fw-bold">S/38.00</span>
                    </div>
                    <p className="card-text text-muted">Carne de res al wok con tomate, cebolla, papas fritas y arroz.</p>
                  </div>
                </div>
              </div>

              {/* PLATO 2 */}
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img 
                    className="card-img-top" 
                    src={`${process.env.PUBLIC_URL}/imagen/plato2.jpg`} 
                    alt="Filete de Pollo" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title fw-bold m-0">Filete de Pollo</h5>
                      <span className="text-primary fw-bold">S/45.00</span>
                    </div>
                    <p className="card-text text-muted">Pechuga a la plancha con base de arroz integral y vegetales frescos.</p>
                  </div>
                </div>
              </div>

              {/* PLATO 3 */}
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img 
                    className="card-img-top" 
                    src={`${process.env.PUBLIC_URL}/imagen/plato3.jpg`} 
                    alt="Seco a la Norteña" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title fw-bold m-0">Seco a la Norteña</h5>
                      <span className="text-primary fw-bold">S/45.00</span>
                    </div>
                    <p className="card-text text-muted">Cerdo estofado en reducción de culantro, acompañado de arroz, frijoles y zarza criolla.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Mi Restaurante 2026</div></div>
            <div className="col-auto">
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

export default Carta;