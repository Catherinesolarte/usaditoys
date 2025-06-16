import { createContext, useEffect, useState, useMemo } from "react";

export const ContextoGlobal = createContext({});

export const ContextoGlobalProvider = ({ children }) => {
  // Usuarios desde localStorage o por defecto
  const usuariosGuardados = JSON.parse(localStorage.getItem("lstUsuarios")) || [
    {
      id: "1",
      email: "catherinesolarte1@gmail.com",
      clave: "123",
      name: "Catherine Solarte",
      img: "https://i.imgur.com/7qvJp.png",
      telefono: "+57 310 123 4567",
      direccion: "Calle 123 #45-67, Colombia",
    },
    {
      id: "2",
      email: "ingcatherinesolarte@gmail.com",
      clave: "456",
      name: "Catherine Admin",
      img: "https://i.imgur.com/4pLoS.png",
      telefono: "+57 311 765 4321",
      direccion: "Carrera 8 #1-34, Colombia",
    },
  ];

  const [lstUsuarios, setLstUsuarios] = useState(usuariosGuardados);

  // Guardar usuarios en localStorage cuando se actualicen
  useEffect(() => {
    localStorage.setItem("lstUsuarios", JSON.stringify(lstUsuarios));
  }, [lstUsuarios]);

  const [usuario, setUsuario] = useState({});
  const [lstProductos, setLstProductos] = useState([]);
  const [toys, setToys] = useState([]);

  const getToys = async () => {
    const res = await fetch("/toys.json");
    const data = await res.json();
    setToys(data);
  };

  useEffect(() => {
    getToys();
  }, []);

  const [buscar, setBuscar] = useState("");
  const searcher = (e) => setBuscar(e.target.value);

  const toysFiltrados = useMemo(() => {
    return toys.filter((toy) =>
      toy.nombre.toLowerCase().includes(buscar.toLowerCase())
    );
  }, [toys, buscar]);

  const [toysCarrito, setToysCarrito] = useState([]);

  const agregarAlCarrito = (toy) => {
    const idx = toysCarrito.findIndex((p) => p.id === toy.id);
    if (idx > -1) {
      const carritoActualizado = [...toysCarrito];
      carritoActualizado[idx].cant += 1;
      setToysCarrito(carritoActualizado);
    } else {
      const toySeleccionado = {
        id: toy.id,
        nombre: toy.nombre,
        precio: parseInt(toy.precio),
        img: toy.img,
        cant: 1,
      };
      setToysCarrito([...toysCarrito, toySeleccionado]);
    }
  };

  const total = useMemo(() => {
    return toysCarrito.reduce(
      (acc, { cant, precio }) => acc + precio * cant,
      0
    );
  }, [toysCarrito]);

  const [toysFavoritos, setToysFavoritos] = useState([]);

  const agregarFavorito = (toy) => {
    const existe = toysFavoritos.some((p) => p.id === toy.id);
    if (existe) return;

    const toyFavorito = {
      id: toy.id,
      nombre: toy.nombre,
      precio: parseInt(toy.precio),
      precioanterior: toy.precioanterior,
      img: toy.img,
    };
    setToysFavoritos([...toysFavoritos, toyFavorito]);
  };

  const totalFavoritos = toysFavoritos.length;

  return (
    <ContextoGlobal.Provider
      value={{
        lstUsuarios,
        setLstUsuarios,
        usuario,
        setUsuario,
        lstProductos,
        setLstProductos,
        toys,
        setToys,
        buscar,
        setBuscar,
        searcher,
        toysFiltrados,
        toysCarrito,
        setToysCarrito,
        agregarAlCarrito,
        total,
        toysFavoritos,
        setToysFavoritos,
        agregarFavorito,
        totalFavoritos,
      }}
    >
      {children}
    </ContextoGlobal.Provider>
  );
};

export default ContextoGlobal;

