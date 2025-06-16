import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";
import Galeria from "../Components/Galeria.jsx";

const UltPublics = () => {
  return (
    <>
      <Header />

      <Container className="py-5">
        <Galeria />
      </Container>
    </>
  );
};

export default UltPublics;
