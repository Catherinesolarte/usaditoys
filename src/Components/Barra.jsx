import React, { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../Img/logo.png";
import ContextoGlobal from "../Context/ContextoGlobal";

const Barra = () => {
  const { total, totalLike } = useContext(ContextoGlobal);

  const totalFormateado = total.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <Navbar
      expand="lg"
      className="navbar-custom shadow-sm py-3"
      sticky="top"
      role="navigation"
    >
      <Container fluid className="px-4">
        {/* Logo - clicable */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="UsadiToys"
            style={{ width: "160px", objectFit: "contain" }}
          />
        </NavLink>

        {/* Botón para menú colapsable */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">

            <NavLink
              to="/UltPublics"
              className={({ isActive }) =>
                isActive ? "nav-active nav-link-custom" : "nav-link-custom"
              }
            >
              Catálogo
            </NavLink>

            <NavLink
              to="/InicioSesion"
              className={({ isActive }) =>
                isActive ? "nav-active nav-link-custom" : "nav-link-custom"
              }
            >
              Iniciar sesión
            </NavLink>

            <NavLink
              to="/Registro"
              className={({ isActive }) =>
                isActive
                  ? "nav-active nav-link-custom"
                  : "btn btn-outline-primary btn-sm rounded-pill px-3"
              }
            >
              Regístrate
            </NavLink>

            <NavLink
              to="/InicioSesion"
              className={({ isActive }) =>
                isActive ? "nav-active nav-link-custom" : "nav-link-custom"
              }
              title="Favoritos"
            >
              <i className="fa-solid fa-heart"></i> <span>{totalLike}</span>
            </NavLink>

            <NavLink
              to="/InicioSesion"
              className={({ isActive }) =>
                isActive ? "nav-active nav-link-custom" : "nav-link-custom"
              }
              title="Carrito"
            >
              <i className="fa-solid fa-cart-shopping"></i> <span>{totalFormateado}</span>
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Barra;
