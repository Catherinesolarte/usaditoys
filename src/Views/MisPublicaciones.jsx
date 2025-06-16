import React, { useContext } from "react";
import Perfil from "../Components/Perfil";
import ContextoGlobal from "../Context/ContextoGlobal";
import { Row, Col } from "react-bootstrap";

const MisPublicaciones = () => {
  const { lstProductos, setLstProductos } = useContext(ContextoGlobal);

  const eliminarPublicacion = (id) => {
    const filteredPublicacion = lstProductos.filter(
      (producto) => producto.id !== id
    );
    setLstProductos(filteredPublicacion);
  };

  return (
    <>
      <Perfil />

      <div className="container py-5">
        <h2 className="mb-4 text-center text-primary fw-bold">
          📦 Mis Publicaciones
        </h2>
        <hr />

        <section className="section-products">
          <div className="container">
            <Row className="g-4">
              {lstProductos.length === 0 ? (
                <div className="text-center text-muted py-5">
                  Aún no has creado publicaciones.
                </div>
              ) : (
                lstProductos.map((producto) => (
                  <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
                    <div className="single-product h-100 d-flex flex-column justify-content-between shadow-sm rounded p-2 bg-white">
                      {/* Imagen y botones */}
                      <div className="position-relative">
                        <img
                          src={producto.img}
                          alt={producto.nombre}
                          className="w-100 rounded-3"
                          style={{ height: "300px", objectFit: "cover" }}
                        />

                        <div className="position-absolute top-0 end-0 p-2 d-flex gap-2">
                          <div className="caja-icono">
                            <i
                              className="fa-solid fa-pen-to-square text-primary fs-5"
                              style={{ cursor: "pointer" }}
                            ></i>
                          </div>
                          <div className="caja-icono">
                            <i
                              className="fa-solid fa-trash text-danger fs-5"
                              style={{ cursor: "pointer" }}
                              onClick={() => eliminarPublicacion(producto.id)}
                            ></i>
                          </div>
                        </div>
                      </div>

                      {/* Información del producto */}
                      <div className="pt-3">
                        {producto.desc && (
                          <p className="text-truncate mb-1 small text-secondary">
                            {producto.desc}
                          </p>
                        )}
                        <h5 className="fw-bold text-truncate">
                          {producto.nombre}
                        </h5>

                        {producto.precioanterior && (
                          <div className="text-muted text-decoration-line-through mb-1">
                            $
                            {parseInt(producto.precioanterior).toLocaleString(
                              "es-CL"
                            )}
                          </div>
                        )}

                        <div className="text-success fw-bold fs-5">
                          ${parseInt(producto.precio).toLocaleString("es-CL")}
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              )}
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default MisPublicaciones;
