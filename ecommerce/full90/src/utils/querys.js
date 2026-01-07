import { collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase.js"; // tu instancia

export const getAllCamisetasByID = async (camisetaId) => {
  const ref = doc(db, "camisetas", camisetaId);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    throw new Error("Camiseta no encontrada");
  }

  return { id: snapshot.id, ...snapshot.data() };
};

export const getAllCajasByID = async (cajaId) => {
  const ref = doc(db, "cajas", cajaId);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    throw new Error("Caja no encontrada");
  }

  return { id: snapshot.id, ...snapshot.data() };
};


export const getCajas = async () => {
        const ref = await getDocs(collection(db, "cajas"));
        const productos = ref.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    
    return productos;
}

export const getCamisetas = async () => {
        const ref = await getDocs(collection(db, "camisetas"));
        const productos = ref.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    
    return productos;
}

