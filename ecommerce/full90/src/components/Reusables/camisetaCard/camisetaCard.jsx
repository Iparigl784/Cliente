import React from "react";
import { Link } from "react-router-dom";
import styles from "./camisetaCard.module.css";

const CamisetaCard = ({ id, imagen, nombre, precio, equipo }) => {
  return (
    <Link to={`/Tienda/${id}`}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img src={imagen} alt={nombre} />
        </div>
        <div className={styles.cardOverlay}>
          <h3>{nombre}</h3>
          <p className={styles.price}>{precio} €</p>
          <p>
            <strong>Equipo:</strong> {equipo}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CamisetaCard;
