import React, { useContext, useState } from "react";
import ContextoGlobal from "../Context/ContextoGlobal";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { agregarUsuario } from "../services/UsuariosService";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [clave, setClave] = useState("");
  const [claveRepetida, setClaveRepetida] = useState("");

  const { setUsuario } = useContext(ContextoGlobal);
  const navigate = useNavigate();

  const registrarUsuarioManual = async () => {
    if (!nombre.trim() || !correo.trim() || !clave.trim() || !claveRepetida.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    if (clave !== claveRepetida) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = {
      name: nombre.trim(),
      telefono: telefono.trim(),
      email: correo.trim(),
      direccion: direccion.trim(),
      clave: clave.trim(),
      img: "",
      conectado: true,
    };

    try {
      const usuarioAgregado = await agregarUsuario(nuevoUsuario);
      setUsuario(usuarioAgregado);
      navigate("/");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("No se pudo registrar el usuario. Intenta más tarde.");
    }
  };

  const registrarConGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const nuevoUsuario = {
        name: user.displayName,
        telefono: "",
        email: user.email,
        direccion: "",
        clave: "",
        img: user.photoURL,
        conectado: true,
      };

      const usuarioAgregado = await agregarUsuario(nuevoUsuario);
      setUsuario(usuarioAgregado);
      navigate("/");
    } catch (error) {
      console.error("Error con Google Auth:", error);
      alert("Error al iniciar sesión con Google.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f7f9fc" }}
    >
      <div
        className="card shadow p-5"
        style={{ maxWidth: "500px", width: "100%", borderRadius: "20px" }}
      >
        <h2 className="mb-4 text-center text-primary fw-bold">
          Crear Cuenta en UsadiToys
        </h2>
        <hr />

        <form>
          <div className="mb-3">
            <label className="form-label">Nombre completo *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombres"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico *</label>
            <input
              type="email"
              className="form-control"
              placeholder="correo@ejemplo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              placeholder="Dirección de residencia"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Contraseña *</label>
              <input
                type="password"
                className="form-control"
                placeholder="Mínimo 6 caracteres"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <label className="form-label">Repetir Contraseña *</label>
              <input
                type="password"
                className="form-control"
                value={claveRepetida}
                onChange={(e) => setClaveRepetida(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="text-center mb-3">
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill px-5"
              onClick={registrarUsuarioManual}
            >
              Registrarme
            </button>
          </div>
        </form>

        <hr />

        <div className="text-center">
          <button
            type="button"
            className="btn btn-outline-danger w-100 rounded-pill"
            onClick={registrarConGoogle}
          >
            <i className="fa-brands fa-google me-2"></i> Registrarme con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
