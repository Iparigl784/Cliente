import React from "react";
import styles from "./cajaCard.module.css";
import { Link } from "react-router-dom";

const CajaCard = ({ id, imagen, nombre, precio }) => {
  return (
    <Link to={`/CajasSorpresa/${id}`}>
      <div className={styles.card}>
        <img src={imagen} alt={nombre} />
        <div className={styles.cardInfo}>
          <h3>{nombre}</h3>
          <p className={styles.price}>{precio} €</p>
        </div>
      </div>
    </Link>
  );
};

export default CajaCard;
