import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextoGlobal from "../Context/ContextoGlobal";

const CardToys = ({ toy }) => {
  const navigate = useNavigate();
  const { agregarAlCarrito, agregarFavorito } = useContext(ContextoGlobal);

  const verDetalle = () => {
    navigate(`/descripcion/${toy.id}`);
  };

  const precioFormateado = Number(toy.precio).toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <div className="card-toy shadow-sm border-0">
      {/* Imagen redondeada */}
      <div
        className="overflow-hidden"
        onClick={verDetalle}
        style={{
          cursor: "pointer",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
        title={`Ver más sobre ${toy.nombre}`}
      >
        <img
          alt={`Imagen de ${toy.nombre}`}
          src={toy.img}
          className="img-fluid w-100 object-fit-cover rounded-top"
          style={{ height: "220px", objectFit: "cover" }}
        />
      </div>

      {/* Información */}
      <div className="p-3 text-center">
        <h5 className="fw-semibold mb-2 text-truncate">{toy.nombre}</h5>
        <p className="text-success fw-bold mb-3">{precioFormateado}</p>

        {/* Botones */}
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-outline-primary btn-sm rounded-pill px-3"
            onClick={() => agregarAlCarrito(toy)}
          >
            Agregar 🛒
          </button>
          <button
            className="btn btn-outline-danger btn-sm rounded-pill px-3"
            onClick={() => agregarFavorito(toy)}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardToys;
