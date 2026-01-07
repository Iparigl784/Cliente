import stylesCard from "./carritoCard.module.css";

import { Icon } from "@iconify/react";

import { useContext } from "react";
import { CartContext } from "../../../contexts/ContextCart";

const Card = ({ id, nombre, talla, cantidad, precio, url, alt }) => {

    const { borrarItemCarrito, restarCantidad, sumarCantidad } = useContext(CartContext);


    return (
        <div className={stylesCard.card}>
            <div className={stylesCard.imagen}>
                <img src={`${url}`} alt={alt} />
            </div>
            <div className={stylesCard.info}>
                <div className={stylesCard.detalles}>
                    <h2>{nombre}</h2>
                    {talla && (<h4>Talla: {talla}</h4>)}
                    <div className={stylesCard.cantidad}>
                        <div className={stylesCard.contador} onClick={() => restarCantidad(id, talla ? talla : null)}>-</div>
                        <h3>{cantidad}</h3>
                        <div className={stylesCard.contador} onClick={() => sumarCantidad(id, talla ? talla : null)}>+</div>
                    </div>
                </div>
                <div className={stylesCard.extras}>
                    <button className={stylesCard.cerrar} onClick={() => borrarItemCarrito(id, talla ? talla : null) }>
                        <Icon icon="mdi:bin" />
                    </button>
                    <h2>€{precio * cantidad}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;