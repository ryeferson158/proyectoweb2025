import React from 'react';
import Navbar from './Navbar'; 

function Promociones() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <Navbar />

        <header className="bg-dark py-5">
          <div className="container px-5 text-center">
            <h1 className="display-5 fw-bolder text-white mb-2">Promociones Especiales</h1>
            <p className="lead fw-normal text-white-50 mb-0">Disfruta de nuestros combos y descuentos exclusivos por tiempo limitado.</p>
          </div>
        </header>

        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              
              {/* PROMO 1 */}
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img 
                    className="card-img-top" 
                    src={`${process.env.PUBLIC_URL}/imagen/promocion1.jpg`} 
                    alt="Promo 1" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-warning text-dark mb-2">¡2x1 Exclusivo!</div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title fw-bold m-0">Combo Familiar Lomo</h5>
                      <span className="text-primary fw-bold">S/150.00</span>
                    </div>
                    <p className="card-text text-muted">Lleva dos platos de Lomo Saltado al precio de uno los días martes y miércoles.</p>
                  </div>
                </div>
              </div>

              {/* PROMO 2 */}
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img 
                    className="card-img-top" 
                    src={`${process.env.PUBLIC_URL}/imagen/promocion2.jpg`} 
                    alt="Promo 2" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-danger text-white mb-2">Menú Ejecutivo</div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title fw-bold m-0">Almuerzo Ejecutivo</h5>
                      <span className="text-primary fw-bold">S/120.00</span>
                    </div>
                    <p className="card-text text-muted">Filete de Pollo acompañado de bebida natural y postre de la casa de lunes a viernes.</p>
                  </div>
                </div>
              </div>

              {/* PROMO 3 */}
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img 
                    className="card-img-top" 
                    src={`${process.env.PUBLIC_URL}/imagen/promocion3.jpg`} 
                    alt="Promo 3" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-success text-white mb-2">Fin de Semana</div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title fw-bold m-0">Festín Norteño</h5>
                      <span className="text-primary fw-bold">S/150.00</span>
                    </div>
                    <p className="card-text text-muted">Seco a la Norteña para dos personas con entrada y jarra de chicha morada incluida.</p>
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

export default Promociones;