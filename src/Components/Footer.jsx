import React from 'react';
import logoblanco from '../Img/logoblanco.png';

const Footer = () => {
  return (
    <footer
      className="text-light py-5"
      style={{
        background: 'linear-gradient(135deg, #007BFF 0%, #0056b3 100%)',
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* Logo e información */}
          <div className="col-12 col-md-5 text-center text-md-start mb-4 mb-md-0">
            <img
              src={logoblanco}
              alt="Logo UsadiToys"
              style={{ width: '150px' }}
              className="mb-3"
            />
            <p className="mb-2 small">
              © 2025 <strong>Catherine Solarte</strong> — Todos los derechos reservados.
            </p>

            {/* Íconos sociales con enlaces funcionales */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="mailto:contacto@usaditoys.com"
                className="text-white"
                aria-label="Correo"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Formulario de suscripción */}
          <div className="col-12 col-md-6">
            <h6 className="mb-3 text-center text-md-start">
              🎁 ¡Suscríbete para recibir ofertas exclusivas!
            </h6>
            <form className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="email"
                className="form-control rounded-pill px-3"
                placeholder="Tu correo electrónico"
                required
              />
              <button
                type="submit"
                className="btn btn-outline-light rounded-pill px-4"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
