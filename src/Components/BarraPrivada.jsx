import React, { useContext } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Img/logo.png";
import ContextoGlobal from "../Context/ContextoGlobal";


const BarraPrivada = () => {
  const { setUsuario, usuario, total, totalFavoritos } =
    useContext(ContextoGlobal);
  const totalCarrito = total.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
  const navigate = useNavigate();

  // Cierra sesión del usuario
  const cerrarApp = () => {
    setUsuario({ conectado: false, nombre: "" });
    navigate(`/`);
  };

  return (
    <Navbar expand="lg" className="navbar-custom">

      <Container>
        {/* Logo principal */}
        <NavLink to="/">
          <img src={logo} alt="UsadiToys" style={{ width: "180px" }} />
        </NavLink>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            {/* Catálogo */}
            <NavLink
              to="/UltPublics"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Catálogo
            </NavLink>

            {/* Menú de perfil */}
            <NavDropdown
              title="Perfil"
              id="perfil-dropdown"
              className="ms-lg-2"
            >
              <h6 className="px-3 mb-2">👤 {usuario.name}</h6>

              <NavDropdown.Item as={NavLink} to="/EditarPerfil">
                Editar Perfil
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/Favoritos">
                Favoritos
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/CrearPublic">
                Subir Publicación
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/MisPublicaciones">
                Mis Publicaciones
              </NavDropdown.Item>
            </NavDropdown>

            {/* Favoritos */}
            <NavLink
              to="/Favoritos"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              <i className="fa-solid fa-heart"></i> {totalFavoritos}
            </NavLink>

            {/* Carrito */}
            <NavLink
              to="/Carrito"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              <i className="fa-solid fa-cart-shopping"></i> {totalCarrito}
            </NavLink>

            {/* Logout */}
            <NavLink
              onClick={cerrarApp}
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraPrivada;
