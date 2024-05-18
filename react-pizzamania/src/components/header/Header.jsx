import React from 'react';

function Header() {
  return (
    <header className="mb-5 position-absolute w-100 z-3" id="header">
      <nav className="navbar navbar-dark navbar-expand-lg pb-0 pt-0 shadow-none" data-pg-collapsed>
        <div className="container"><a className="align-items-center bg-success d-inline-flex flex-column fw-bold gap-2 h4 lh-1 navbar-brand p-2 rounded-5 rounded-pill rounded-top" href="#" data-pg-collapsed><span>Pizzamania</span><img src="/logo.png" width="40" /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="me-auto ms-auto navbar-nav">
              <li className="nav-item"> <a className="fw-semibold nav-link p-lg-3 pe-xl-4 ps-xl-4 text-light" href="#home">Home</a>
              </li>
              <li className="nav-item"> <a className="fw-semibold nav-link p-lg-3 pe-xl-4 ps-xl-4 text-light" href="#about">About</a>
              </li>
              <li className="nav-item"> <a className="fw-semibold nav-link p-lg-3 pe-xl-4 ps-xl-4 text-light" href="#offers">Offers</a>
              </li>
              <li className="nav-item"> <a className="fw-semibold nav-link p-lg-3 pe-xl-4 ps-xl-4 text-light" href="#gallary">Gallery</a>
              </li>
              <li className="nav-item"> <a className="fw-semibold nav-link p-lg-3 pe-xl-4 ps-xl-4 text-light" href="#shop">Shop</a>
              </li>
            </ul>
            <div className="d-inline-flex flex-wrap gap-3 py-1"> <a href="#" aria-label="facebook" className="link-light text-decoration-none"><i className="fa-fw fa-lg fa-pizza-slice fas"></i> </a>
              <a href="#" aria-label="facebook" className="link-light text-decoration-none"><i className="fa-fw fa-lg fa-shopping-cart fas"></i> </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header