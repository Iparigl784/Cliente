import ProductoDetalle from "../components/Reusables/detallesCaja/detallesCaja";
import styles from "./modules/cajas.module.css";


function Caja() {
  return (
    <div className={styles.cajaContainer}>
      <ProductoDetalle />
    </div>
  );
}

export default Caja;