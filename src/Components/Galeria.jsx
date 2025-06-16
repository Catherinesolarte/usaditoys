import React, { useContext, useState, useMemo } from "react";
import ContextoGlobal from "../Context/ContextoGlobal";
import CardToys from "./CardToys";

/**
 * Componente Galeria:
 * Muestra listado de juguetes con funcionalidades de búsqueda global y ordenamiento local.
 */
const Galeria = () => {
  const { toys, buscar, searcher } = useContext(ContextoGlobal);
  const [orden, setOrden] = useState("default");

  // Filtrado por búsqueda (usando búsqueda global desde contexto)
  const toysFiltrados = useMemo(() => {
    return toys.filter((toy) =>
      toy.nombre.toLowerCase().includes(buscar.toLowerCase())
    );
  }, [toys, buscar]);

  // Ordenamiento optimizado
  const toysOrdenados = useMemo(() => {
    let resultado = [...toysFiltrados];
    if (orden === "menorA") {
      resultado.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
    } else if (orden === "mayorA") {
      resultado.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
    }
    return resultado;
  }, [toysFiltrados, orden]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-primary fw-bold">
        🎁 Galería de Juguetes
      </h2>

      {/* Filtros de búsqueda y ordenamiento */}
      <div className="row g-3 mb-4 align-items-center justify-content-between">
        {/* Ordenamiento */}
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-md-center">
          <label htmlFor="ordenSelect" className="fw-bold me-2 mb-2 mb-md-0">
            Ordenar por:
          </label>
          <select
            id="ordenSelect"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="form-select w-100 w-md-auto"
          >
            <option value="default">Seleccione</option>
            <option value="menorA">Precio: menor a mayor</option>
            <option value="mayorA">Precio: mayor a menor</option>
          </select>
        </div>

        {/* Búsqueda */}
        <div className="col-12 col-md-6">
          <input
            type="search"
            placeholder="🔎 Buscar juguetes"
            value={buscar}
            onChange={searcher}
            className="form-control"
          />
        </div>
      </div>

      {/* Grid de productos responsivo */}
      <div className="row g-4">
        {toysOrdenados.map((toy) => (
          <div key={toy.id} className="col-6 col-md-4 col-lg-3">
            <CardToys toy={toy} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
