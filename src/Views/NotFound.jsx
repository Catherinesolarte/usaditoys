import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="text-danger fw-bold display-4 mb-3">
        404 - Página no encontrada
      </h1>
      <p className="text-secondary mb-4">
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </p>
      <Link to="/" className="btn btn-outline-primary rounded-pill px-4">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
