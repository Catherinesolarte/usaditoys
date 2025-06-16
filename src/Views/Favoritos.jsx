import React from "react";
import Perfil from "../Components/Perfil";
import GaleriaFavoritos from "../Components/GaleriaFavoritos";


const Favoritos = () => {
  return (
    <>
      <Perfil />

      <div className="container py-5">
        <h2 className="mb-4 text-center text-primary fw-bold">
          ❤️ Mis Favoritos
        </h2>
        <hr />

        <GaleriaFavoritos />
      </div>
    </>
  );
};

export default Favoritos;
