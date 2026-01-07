import styles from "./detallesCamiseta.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { getAllCamisetasByID } from "../../../utils/querys";
import { CartContext } from "../../../contexts/ContextCart";

function ProductoDetalle() {
  const { camisetaID } = useParams();
  const { añadirCarrito } = useContext(CartContext);

  const [product, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllCamisetasByID(camisetaID);
        setProducto(data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [camisetaID]);

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>No se ha encontrado el producto</p>;

  return (
    <>
      {/* ---------- IMÁGENES ---------- */}
      <div className={styles.imagenes}>
        <img src={product.imagen} alt={product.alt} />
        {product.url_r && <img src={product.url_r} alt={product.alt} />}
      </div>

      {/* ---------- INFO ---------- */}
      <div className={styles.info}>
        <h1>{product.nombre}</h1>

        {/* Precio */}
        {product.precio_descuento ? (
          <div className={styles.precio}>
            <p>Precio:</p>
            <h4 className={styles.descuento}>{product.precio} €</h4>
            <h3>{product.precio_descuento} €</h3>
          </div>
        ) : (
          <div className={styles.precio}>
            <p>Precio:</p>
            <h3>{product.precio} €</h3>
          </div>
        )}

        {/* Tallas */}
        {Array.isArray(product.tallas) && (
          <div className={styles.tallas}>
            {product.tallas.map((talla) => {
              const isSelected = tallaSeleccionada === talla;

              return (
                <div
                  key={talla}
                  className={`
            ${isSelected ? styles.tallaSeleccionada : ""}
          `}
                  onClick={() => setTallaSeleccionada(talla)}
                >
                  <p>{talla}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Botón */}
        <div className={styles.button}>
          <button
            onClick={() => añadirCarrito(product, tallaSeleccionada)}
            disabled={!tallaSeleccionada}
          >
            AÑADIR AL CARRITO
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductoDetalle;
