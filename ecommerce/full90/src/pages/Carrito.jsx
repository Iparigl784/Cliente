import stylesCarrito from "./modules/carrito.module.css";
import { Icon } from "@iconify/react";

import { useState } from "react";

import { useContext } from "react";
import { CartContext } from "../contexts/ContextCart";

import { useNavigate } from "react-router-dom";

import Card from "../components/carrito/carritoCard/carritoCard.jsx";

const Carrito = ({ closeCarrito }) => {
  const [cerrar, setCerrar] = useState(false);
  const { carrito, vaciarCarrito } = useContext(CartContext);

  const navigate = useNavigate();

  const handleClose = () => {
    setCerrar(true);

    // Espera a que termine la animación (300ms)
    setTimeout(() => {
      closeCarrito();
    }, 300);
  };


  return (
    <div
      className={`${stylesCarrito.carrito} ${cerrar ? stylesCarrito.closing : ""
        }`}
    >
      <button className={stylesCarrito.cerrar} onClick={handleClose}>
        <Icon icon="material-symbols:close" />
      </button>
      <h2>CARRITO</h2>
      <hr />
      <img src="/img/favicon.svg" alt="" />
      {carrito.length > 0 ? (
        <>
          <div className={stylesCarrito.cards} >
            {carrito.map((prod, index) => (
              <Card key={index} id={prod.id} nombre={prod.nombre} talla={prod?.tallaSeleccionada} precio={prod.precio_descuento ? prod.precio_descuento : prod.precio} cantidad={prod.cantidad} url={prod.imagen} alt={prod.alt} />
            ))}
          </div>
          <div className={stylesCarrito.checkout}>
            <p>Total: €{carrito.reduce((total, producto) => { return total + (producto.precio_descuento ? (Number(producto.precio_descuento)) : (Number(producto.precio))) * Number(producto.cantidad) }, 0)}</p>
            <div className={stylesCarrito.button}>
              <button type="submit" onClick={() => navigate("/Checkout")}>
                CHECKOUT
              </button>
            </div>
          </div>
          <p onClick={() => vaciarCarrito()}>Vaciar carrito....</p>
        </>
      ) : (
        <div className={stylesCarrito.blankState}>
          <h3>Tú carrito está vacio</h3>
        </div>
      )}
    </div>
  );
};

export default Carrito;