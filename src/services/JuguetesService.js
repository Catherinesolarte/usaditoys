import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

/**
 * Servicio para manejar los juguetes (CRUD en Firestore)
 */

// Referencia a la colección "juguetes" en Firestore
const juguetesCollection = collection(db, "juguetes");

/**
 * Obtiene todos los juguetes desde Firestore
 */
export const obtenerJuguetes = async () => {
  const snapshot = await getDocs(juguetesCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/**
 * Agrega un nuevo juguete a Firestore
 * @param {Object} juguete 
 */
export const agregarJuguete = async (juguete) => {
  await addDoc(juguetesCollection, juguete);
};
