import React from "react";
import styles from "./infoCard.module.css";
import { Icon } from "@iconify/react";

const InfoCard = ({ icon, text }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoIcon}>
        <Icon icon={icon} />
      </div>
      <div className={styles.infoTitle}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
