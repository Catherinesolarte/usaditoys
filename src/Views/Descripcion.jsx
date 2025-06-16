import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ContextoGlobal from "../Context/ContextoGlobal";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/Header";
import GaleriaComplementa from "../Components/GaleriaComplementa";

// Vista detalle de un producto (toy)
const Descripcion = () => {
  const { id } = useParams();
  const { toys, agregarAlCarrito, agregarFavorito } =
    useContext(ContextoGlobal);

  // Busca el producto por ID
  const toyDetalle = toys.find((p) => p.id === id);

  if (!toyDetalle) {
    return (
      <Container className="py-5">
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }

  return (
    <>
      <Header />

      {/* Sección principal detalle */}
      <Container className="py-5">
        <Row>
          {/* Imágenes laterales (miniaturas) */}
          <Col md={2} className="mb-3">
            <img
              src={toyDetalle.imgsec}
              alt="sec"
              className="img-fluid rounded mb-3"
            />
            <img
              src={toyDetalle.imgter}
              alt="ter"
              className="img-fluid rounded"
            />
          </Col>

          {/* Imagen principal */}
          <Col md={5} className="mb-3">
            <img
              src={toyDetalle.img}
              alt={toyDetalle.nombre}
              className="img-fluid rounded"
            />
          </Col>

          {/* Información del producto */}
          <Col md={5}>
            <h3>{toyDetalle.nombre}</h3>
            <p>{toyDetalle.desc}</p>
            <h4 className="mb-4">
              ${parseInt(toyDetalle.precio).toLocaleString("es-CL")}
            </h4>

            <div className="d-flex">
              <button
                className="btn btn-outline-dark rounded-pill me-3"
                onClick={() => agregarAlCarrito(toyDetalle)}
              >
                Agregar al carrito
              </button>

              <button
                className="btn btn-outline-dark rounded-pill"
                onClick={() => agregarFavorito(toyDetalle)}
              >
                <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Complementa tu compra */}
      <Container className="py-4">
        <h4 className="mb-3">Complementa tu compra</h4>
        <GaleriaComplementa />
      </Container>
    </>
  );
};

export default Descripcion;
