import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { toast } from "react-toastify";
import { UserContext } from "./ContextUser";

const CartContext = createContext(null);

function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const data = localStorage.getItem("UserCarrito");
    return data ? JSON.parse(data) : [];
  });

  const { currentUser } = useContext(UserContext);

  // =========================
  // CARGAR CARRITO INICIAL
  // =========================
  useEffect(() => {
    async function cargarCarrito() {
      const carritoLS = JSON.parse(localStorage.getItem("UserCarrito")) || [];

      // Usuario NO logueado
      if (!currentUser) {
        setCarrito(carritoLS);
        return;
      }

      // Usuario logueado
      try {
        const ref = doc(
          db,
          "users",
          currentUser.uid,
          "carrito",
          "carritoActual"
        );
        const snapshot = await getDoc(ref);

        // Si no existe en Firebase, guardamos el local
        if (!snapshot.exists()) {
          await setDoc(ref, { items: carritoLS });
          setCarrito(carritoLS);
        } else {
          // Merge local + firebase
          const carritoFirebase = snapshot.data().items || [];
          const carritoMerge = [...carritoFirebase];

          carritoLS.forEach((itemLS) => {
            const existente = carritoMerge.find(
              (item) => item.id === itemLS.id
            );

            if (existente) {
              existente.cantidad += itemLS.cantidad;
            } else {
              carritoMerge.push(itemLS);
            }
          });

          setCarrito(carritoMerge);
          localStorage.setItem("UserCarrito", JSON.stringify(carritoMerge));
          await setDoc(ref, { items: carritoMerge });
        }
      } catch (error) {
        console.error("Error cargando carrito", error);
      }
    }

    cargarCarrito();
  }, [currentUser]);

  // =========================
  // SINCRONIZAR CARRITO
  // =========================
  useEffect(() => {
    localStorage.setItem("UserCarrito", JSON.stringify(carrito));

    if (!currentUser) return;

    const syncFirebase = async () => {
      try {
        const ref = doc(
          db,
          "users",
          currentUser.uid,
          "carrito",
          "carritoActual"
        );
        await setDoc(ref, { items: carrito }, { merge: true });
      } catch (error) {
        console.error("Error sincronizando carrito", error);
      }
    };

    syncFirebase();
  }, [carrito, currentUser]);

  // =========================
  // ACCIONES DEL CARRITO
  // =========================
  function añadirCarrito(producto, tallaSeleccionada) {
    if (!tallaSeleccionada) {
      alert("Selecciona una talla.");
      return;
    }

    const productoExistente = carrito.find((prod) => prod.id === producto.id);

    let nuevoCarrito;

    if (productoExistente) {
      nuevoCarrito = carrito.map((prod) =>
        prod.id === producto.id
          ? { ...prod, cantidad: prod.cantidad + 1 }
          : prod
      );
    } else {
      nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);
    toast.success("Producto añadido al carrito");
  }

  function borrarItemCarrito(id) {
    const nuevoCarrito = carrito.filter((prod) => prod.id !== id);
    setCarrito(nuevoCarrito);
  }

  function restarCantidad(id) {
    const producto = carrito.find((prod) => prod.id === id);
    if (!producto) return;

    if (producto.cantidad === 1) {
      borrarItemCarrito(id);
    } else {
      const nuevoCarrito = carrito.map((prod) =>
        prod.id === id ? { ...prod, cantidad: prod.cantidad - 1 } : prod
      );
      setCarrito(nuevoCarrito);
    }
  }

  function sumarCantidad(id) {
    const nuevoCarrito = carrito.map((prod) =>
      prod.id === id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
    );
    setCarrito(nuevoCarrito);
  }

  async function vaciarCarrito() {
    setCarrito([]);
    localStorage.removeItem("UserCarrito");

    if (!currentUser) return;

    try {
      const ref = doc(db, "users", currentUser.uid, "carrito", "carritoActual");
      await deleteDoc(ref);
    } catch (error) {
      console.error("Error al vaciar el carrito", error);
    }
  }

  const ctxValue = {
    carrito,
    añadirCarrito,
    borrarItemCarrito,
    restarCantidad,
    sumarCantidad,
    vaciarCarrito,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
