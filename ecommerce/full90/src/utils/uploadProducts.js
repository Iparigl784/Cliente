import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import  cajas  from "../data/cajas";
import  camisetas  from "../data/camisetas";

export const uploadCajas = async () => {
    try {
        const productsRef = collection(db, "cajas");

        for (const prod of cajas) {
            const docRef = doc(productsRef, `${String(prod.id)}`);
            await setDoc(docRef, prod);
        }
    } catch (error) {
        console.error("Error al subir cajas", error);
    }
}

export const uploadCamisetas = async () => {
    try {
        const productsRef = collection(db, "camisetas");

        for (const prod of camisetas) {
            const docRef = doc(productsRef, `${String(prod.id)}`);
            await setDoc(docRef, prod);
        }
    } catch (error) {
        console.error("Error al subir camisetas", error);
    }
}