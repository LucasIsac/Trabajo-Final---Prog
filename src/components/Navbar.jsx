import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3" id="menu">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <span className="fs-5 text-primary fw-bold">Estrella Azul</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Paquete
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <NavLink className="dropdown-item" to="/Paquetes">
                    Action
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#equipo">
                Equipo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#seccion-contacto">
                Contactos
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="email"
              placeholder="Correo Electronico"
            />
            <button className="btn btn-primary" type="button">
              Suscríbete
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

