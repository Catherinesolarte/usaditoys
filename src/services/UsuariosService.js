import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// Referencia a la colección "usuarios"
const usuariosRef = collection(db, "usuarios");

/**
 * Agrega un nuevo usuario a la colección "usuarios" en Firestore.
 * @param {Object} usuario - Datos del usuario a registrar.
 * @returns {Object} - El usuario agregado con su ID generado por Firestore.
 */
export const agregarUsuario = async (usuario) => {
  try {
    const docRef = await addDoc(usuariosRef, usuario);
    return { id: docRef.id, ...usuario };
  } catch (error) {
    console.error("❌ Error al agregar usuario a Firestore:", error);
    throw new Error("No se pudo registrar el usuario.");
  }
};
