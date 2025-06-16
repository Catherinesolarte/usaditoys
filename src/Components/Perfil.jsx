import React, { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ContextoGlobal from "../Context/ContextoGlobal";

const Perfil = () => {
  const { usuario } = useContext(ContextoGlobal);

  // Validación defensiva por si no hay datos de usuario
  if (!usuario || !usuario.name) {
    return <p className="text-center mt-5">Cargando perfil...</p>;
  }

  return (
    <div className="perfil-section py-5">
      <div className="container text-center">

        {/* Avatar y nombre del usuario */}
        <div className="perfil-contenedor d-flex flex-column align-items-center mb-4">
          <img
            className="imgRedonda mb-3"
            alt={`Foto de ${usuario.name}`}
            src={usuario.img || "https://i.imgur.com/w1pE6Es.png"}
          />
          <h3 className="mb-2">Hola: {usuario.name}</h3>

          <NavLink
            to="/EditarPerfil"
            className="btn btn-outline-primary rounded-pill px-4"
          >
            Editar Perfil
          </NavLink>
        </div>

        {/* Navegación de accesos rápidos */}
        <Navbar>
          <Container>
            <Nav className="flex-column flex-md-row justify-content-center gap-3">
              <NavLink
                to="/CrearPublic"
                className={({ isActive }) =>
                  isActive ? "nav-active btn-profile" : "btn-profile"
                }
              >
                Crear Publicación
              </NavLink>

              <NavLink
                to="/Favoritos"
                className={({ isActive }) =>
                  isActive ? "nav-active btn-profile" : "btn-profile"
                }
              >
                Favoritos
              </NavLink>

              <NavLink
                to="/MisPublicaciones"
                className={({ isActive }) =>
                  isActive ? "nav-active btn-profile" : "btn-profile"
                }
              >
                Mis Publicaciones
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Perfil;
