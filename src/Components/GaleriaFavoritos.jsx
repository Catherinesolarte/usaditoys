import React, { useContext } from "react";
import ContextoGlobal from "../Context/ContextoGlobal";
import { Row } from "react-bootstrap";

// Galería de Juguetes Favoritos (catherinesolarte - usaditoys)
const GaleriaFavoritos = () => {
  const { toysFavoritos, setToysFavoritos } = useContext(ContextoGlobal);

  // Función para eliminar un favorito por ID
  const eliminarFavoritos = (id) => {
    const filteredFavoritos = toysFavoritos.filter((toy) => toy.id !== id);
    setToysFavoritos(filteredFavoritos);
  };

  return (
    <section className="section-products py-4">
      <div className="container">
        <h2 className="mb-4 text-center">Mis Favoritos</h2>
        <Row>
          {toysFavoritos.map((p) => (
            <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="single-product h-100 d-flex flex-column justify-content-between">
                <div className="part-1 position-relative">
                  <ul className="position-absolute top-0 end-0 p-2">
                    <li>
                      {/* Botón eliminar del listado de favoritos */}
                      <div className="caja-icono">
                        <i
                          className="fa-solid fa-trash"
                          style={{ cursor: "pointer" }}
                          onClick={() => eliminarFavoritos(p.id)}
                        ></i>
                      </div>
                    </li>
                  </ul>
                  {/* Imagen del juguete */}
                  <img
                    alt={p.nombre}
                    src={p.img}
                    className="w-100 rounded"
                    style={{ height: "260px", objectFit: "cover" }}
                  />
                </div>

                <div className="part-2 p-2">
                  {/* Descripción resumida (si existe) */}
                  {p.desc && (
                    <p
                      className="product-title text-truncate mb-1"
                      style={{ fontSize: "12px" }}
                    >
                      {p.desc}
                    </p>
                  )}
                  {/* Nombre del juguete */}
                  <h3 className="product-title fs-6 mb-2 text-truncate">
                    {p.nombre}
                  </h3>
                  {/* Precio anterior validado */}
                  {p.precioanterior && (
                    <h4 className="product-old-price text-muted mb-1">
                      ${parseInt(p.precioanterior).toLocaleString("es-CL")}
                    </h4>
                  )}
                  {/* Precio actual */}
                  <h4 className="product-price fw-bold">
                    ${parseInt(p.precio).toLocaleString("es-CL")}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default GaleriaFavoritos;
