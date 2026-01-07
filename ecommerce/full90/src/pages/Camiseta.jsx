import ProductoDetalle from "../components/Reusables/detallesCamiseta/detallesCamiseta";
import styles from "./modules/camiseta.module.css";


function Camiseta() {
  return (
    <div className={styles.camisetaContainer}>
      <ProductoDetalle />
    </div>
  );
}

export default Camiseta;