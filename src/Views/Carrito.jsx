import React, { useContext } from 'react';
import ContextoGlobal from '../Context/ContextoGlobal';
import { NavLink, useNavigate } from 'react-router-dom';

const Carrito = () => {
  const { toysCarrito, setToysCarrito, total } = useContext(ContextoGlobal);
  const navigate = useNavigate(); // Aquí lo definimos

  const disminuirCantidad = (id) => {
    const idx = toysCarrito.findIndex((p) => p.id === id);
    if (idx > -1) {
      if (toysCarrito[idx].cant > 1) {
        toysCarrito[idx].cant -= 1;
        setToysCarrito([...toysCarrito]);
      } else {
        const nuevaLista = toysCarrito.filter((p) => p.id !== id);
        setToysCarrito(nuevaLista);
      }
    }
  };

  const aumentarCantidad = (id) => {
    const idx = toysCarrito.findIndex((p) => p.id === id);
    if (idx > -1) {
      toysCarrito[idx].cant += 1;
      setToysCarrito([...toysCarrito]);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Carrito de Compras</h2>

      <div className="d-none d-md-flex justify-content-between py-2 mb-4 fw-bold border-bottom">
        <div className="w-50">Producto</div>
        <div className="w-25 text-center">Subtotal</div>
        <div className="w-25 text-center">Cantidad</div>
      </div>

      {toysCarrito.map((p) => (
        <div key={p.id} className="d-flex flex-column flex-md-row justify-content-between align-items-center my-3 border-bottom pb-3">
          <div className="d-flex align-items-center w-100 w-md-50 mb-2 mb-md-0">
            <img alt={p.nombre} src={p.img} width="70" height="70" style={{ objectFit: 'cover', borderRadius: '8px' }} />
            <NavLink to={`/descripcion/${p.id}`} className="ms-3 text-decoration-none text-dark">{p.nombre}</NavLink>
          </div>

          <div className="w-100 w-md-25 text-center mb-2 mb-md-0">
            ${ (p.precio * p.cant).toLocaleString('es-CL') }
          </div>

          <div className="w-100 w-md-25 text-center">
            <button className="btn btn-outline-primary mx-1" onClick={() => disminuirCantidad(p.id)}>-</button>
            <strong>{p.cant}</strong>
            <button className="btn btn-outline-primary mx-1" onClick={() => aumentarCantidad(p.id)}>+</button>
          </div>
        </div>
      ))}

      <hr />

      <div className="fs-5 text-end mb-4">
        Total Pedido: <strong>${ total.toLocaleString('es-CL') }</strong>
      </div>

      {/* Botón de ir a pagar */}
      <div className="text-end">
        <button 
          className="btn btn-primary btn-lg rounded-pill px-5" 
          onClick={() => navigate("/checkout")}
        >
          Ir a pagar
        </button>
      </div>
    </div>
  );
};  

export default Carrito;
