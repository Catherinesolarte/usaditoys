import React, { useContext, useState } from "react";
import Perfil from "../Components/Perfil";
import ContextoGlobal from "../Context/ContextoGlobal";
import { useNavigate } from "react-router-dom";

// Componente para crear nueva publicación de juguete (usaditoys / catherinesolarte)
const CrearPublic = () => {
  const { lstProductos, setLstProductos } = useContext(ContextoGlobal);

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [precioanterior, setPrecioanterior] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  // Publica nuevo producto en el contexto global
  const publicarProducto = () => {
    if (!nombre || !precio || !img) {
      alert(
        "Por favor completa los campos obligatorios: Nombre, Precio e Imagen"
      );
      return;
    }

    const nuevoProducto = {
      id: (lstProductos.length + 1).toString(), // Genera id simple
      nombre,
      precio: parseInt(precio),
      precioanterior: parseInt(precioanterior) || null,
      img,
      desc,
    };

    setLstProductos([...lstProductos, nuevoProducto]);
    navigate("/MisPublicaciones");
  };

  return (
    <>
      <Perfil />

      <div className="container py-5">
        <h2 className="mb-4 text-center">Crear Publicación</h2>
        <hr />

        <form className="mx-auto" style={{ maxWidth: "600px" }}>
          {/* Nombre del juguete */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del juguete *"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          {/* Precio actual */}
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Precio $ *"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>

          {/* Precio anterior (opcional) */}
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Precio anterior $ (opcional)"
              value={precioanterior}
              onChange={(e) => setPrecioanterior(e.target.value)}
            />
          </div>

          {/* URL de la imagen */}
          <div className="mb-3">
            <input
              type="url"
              className="form-control"
              placeholder="URL de la imagen *"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>

          {/* Descripción opcional */}
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Descripción (opcional)"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-primary px-5 rounded-pill"
              onClick={publicarProducto}
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CrearPublic;
