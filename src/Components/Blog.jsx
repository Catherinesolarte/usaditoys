import React from "react";

const Blog = () => {
  return (
    <>
      {/* Sección principal del blog */}
      <section className="blog-section d-flex flex-column flex-lg-row align-items-center justify-content-center p-4">
        {/* Imagen animada */}
        <div className="blog-image mb-4 mb-lg-0">
          <img
            src="https://media.giphy.com/media/SVdBqONiBRT9i/giphy.gif"
            alt="Juguetes UsadiToys Animados"
            className="img-fluid rounded-4 shadow"
            style={{ maxWidth: "320px" }}
          />
        </div>

        {/* Texto descriptivo */}
        <div className="blog-text ps-lg-5 text-center text-lg-start">
          <h6 className="text-secondary mb-2">Blog</h6>
          <h3 className="fw-bold mb-3">Tendencias en Juguetes 2025</h3>
          <p className="mb-4">
            Descubre las últimas tendencias en juguetes reutilizados, cómo darle
            una nueva vida a tus juguetes favoritos y apoyar la economía
            circular. En UsadiToys promovemos el juego sostenible para los más
            pequeños.
          </p>

          <button
            type="button"
            className="btn btn-outline-dark rounded-pill px-4"
          >
            Ver más
          </button>
        </div>
      </section>

      {/* Espacio reservado para futuras promociones */}
      <section className="publicidad p-5 text-center text-muted">
        {/* Aquí podemos incluir futuras promos o banners */}
      </section>
    </>
  );
};

export default Blog;
