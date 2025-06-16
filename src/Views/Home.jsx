import React from "react";
import Header from "../Components/Header";
import GaleriaComplementa from "../Components/GaleriaComplementa";

const Home = () => {
  return (
    <>
      <Header />

      {/* Galería de productos destacados */}
      <GaleriaComplementa />

      {/* Blog informativo */}
      <section className="blog my-5 d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YWZraWY4YXV4empkYjN1OHNhYnNmc250ajVqbThtMjk1djNkNThxbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1EPgwqRpfEGadfzXAd/giphy.webp"
            alt="juguetes gif"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "400px", margin: "2em" }}
          />
        </div>

        <div className="textoDescripcion px-3" style={{ maxWidth: "600px" }}>
          <h6 className="text-secondary">Blog</h6>
          <h3 className="fw-bold mb-3">
            Tendencias 2025 - Juguetes Usados Como Nuevos
          </h3>
          <p className="text-secondary">
            Los juguetes reutilizados están marcando tendencia, fomentando la
            economía circular y ofreciendo productos únicos a precios
            accesibles. Este 2025 veremos el auge de juguetes clásicos
            restaurados, coleccionables vintage y juguetes de aprendizaje que
            reciben una segunda oportunidad para llenar de alegría nuevos
            hogares. ¡En Usaditoys cada juguete tiene su propia historia lista
            para continuar!
          </p>
        </div>
      </section>

      {/* Publicidad futura */}
      <section className="publicidad"></section>
    </>
  );
};

export default Home;
