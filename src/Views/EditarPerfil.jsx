import React, { useContext, useState } from "react";
import Perfil from "../Components/Perfil";
import ContextoGlobal from "../Context/ContextoGlobal";
import { useNavigate } from "react-router-dom";

// Componente de edición de perfil (usaditoys / catherinesolarte)
const EditarPerfil = () => {
  const { usuario, setUsuario } = useContext(ContextoGlobal);
  const navigate = useNavigate();

  // Estados locales inicializados con datos actuales
  const [name, setName] = useState(usuario.name);
  const [rut, setRut] = useState(usuario.rut);
  const [telefono, setTelefono] = useState(usuario.telefono);
  const [email, setEmail] = useState(usuario.email);
  const [direccion, setDireccion] = useState(usuario.direccion);
  const [clave, setClave] = useState(usuario.clave);
  const [img, setImg] = useState(usuario.img);

  // Actualiza el usuario en el contexto global
  const actualizarUsuario = () => {
    const usuarioActualizado = {
      conectado: true,
      id: usuario.id,
      email,
      clave,
      name,
      img,
      rut,
      telefono,
      direccion,
    };

    setUsuario(usuarioActualizado);
    navigate("/MisPublicaciones");
  };

  return (
    <>
      <Perfil />
      <div className="container py-5">
        <h2 className="mb-4 text-center">Editar Perfil</h2>
        <hr />

        <form className="mx-auto" style={{ maxWidth: "600px" }}>
          {/* Campo Nombre */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Rut y Teléfono */}
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="RUT"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="tel"
                className="form-control"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </div>

          {/* Correo */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Dirección */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>

          {/* Imagen */}
          <div className="mb-3">
            <input
              type="url"
              className="form-control"
              placeholder="URL de imagen de perfil"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>

          {/* Contraseña */}
          <div className="row mb-3">
            <div className="col">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="password"
                className="form-control"
                placeholder="Repetir contraseña"
              />
            </div>
          </div>

          {/* Botón actualizar */}
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill px-5"
              onClick={actualizarUsuario}
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditarPerfil;
