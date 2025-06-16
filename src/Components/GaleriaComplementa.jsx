import React, { useContext } from "react";
import ContextoGlobal from "../Context/ContextoGlobal.jsx";
import CardToys from "./CardToys.jsx";
import { Row, Col } from "react-bootstrap";

const GaleriaComplementa = () => {
  const { toys } = useContext(ContextoGlobal);

  // Tomamos solo los primeros 4 juguetes como sugerencias
  const toysRecomendados = toys.slice(0, 4);

  return (
    <section className="section-products py-5">
      <div className="container">
        <h2 className="mb-4 text-center text-primary fw-bold">
          🎯 También te puede interesar
        </h2>

        <Row className="g-4">
          {toysRecomendados.map((toy) => (
            <Col key={toy.id} xs={12} sm={6} md={4} lg={3}>
              <CardToys toy={toy} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default GaleriaComplementa;
