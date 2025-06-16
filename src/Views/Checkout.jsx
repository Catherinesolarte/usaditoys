import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const finalizarCompra = () => {
    alert("¡Gracias por tu compra! 🎉");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Confirmación de Compra</h2>
      <p className="text-center mb-5">
        Estás a un paso de completar tu compra. ¿Deseas finalizar el pedido?
      </p>

      <div className="text-center">
        <button 
          className="btn btn-primary btn-lg rounded-pill px-5 mx-3" 
          onClick={finalizarCompra}
        >
          Confirmar Compra
        </button>

        <button 
          className="btn btn-outline-secondary btn-lg rounded-pill px-5 mx-3" 
          onClick={() => navigate("/carrito")}
        >
          Volver al carrito
        </button>
      </div>
    </div>
  );
};

export default Checkout;
