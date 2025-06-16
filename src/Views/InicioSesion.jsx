import React, { useContext, useState } from "react";
import ContextoGlobal from "../Context/ContextoGlobal";
import { useNavigate } from "react-router-dom";

const InicioSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { lstUsuarios, setUsuario } = useContext(ContextoGlobal);
  const navigate = useNavigate();

  const validarUsuario = () => {
    const usuarioValido = lstUsuarios.find(
      (usuario) =>
        usuario.email === email.trim() && usuario.clave === password.trim()
    );

    if (usuarioValido) {
      setUsuario({
        conectado: true,
        id: usuarioValido.id,
        name: usuarioValido.name,
        clave: usuarioValido.clave,
        email: usuarioValido.email,
        img: usuarioValido.img,
        rut: usuarioValido.rut,
        telefono: usuarioValido.telefono,
        direccion: usuarioValido.direccion,
      });
      navigate("/");
    } else {
      alert("Usuario o contraseña inválidos.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f7f9fc" }}
    >
      <div
        className="card shadow p-5"
        style={{ maxWidth: "450px", borderRadius: "20px" }}
      >
        <h2 className="mb-4 text-center text-primary fw-bold">
          Bienvenido a UsadiToys
        </h2>
        <hr />

        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Botón de inicio de sesión */}
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill px-5 py-2"
              onClick={validarUsuario}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InicioSesion;
