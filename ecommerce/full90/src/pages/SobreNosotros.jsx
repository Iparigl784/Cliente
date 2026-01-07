import styles from "./modules/sobrenosotros.module.css";

function SobreNosotros() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img
          src="/img/nosotros/imagen1.webp"
          alt="Sobre nosotros 1"
          className={styles.image}
        />
        <div className={styles.text}>
          <h2>Nuestra Historia</h2>
          <p>
            En Full90 nacimos de la pasión por el fútbol y el estilo. Para nosotros, una camiseta no es solo una prenda: 
            es identidad, emoción y recuerdos que se llevan en el pecho. Cada diseño nace con cuidado y originalidad, 
            pensado para quienes viven el fútbol más allá de los 90 minutos. Calidad, personalidad y estilo en cada hilo: 
            así es como contamos nuestra historia.
          </p>
        </div>
      </div>

      <div className={`${styles.section} ${styles.reverse}`}>
        <img
          src="/img/nosotros/imagen2.webp"
          alt="Sobre nosotros 2"
          className={styles.image}
        />
        <div className={styles.text}>
          <h2>Nuestro Objetivo</h2>
          <p>
            En Full90 buscamos que cada fanático lleve su pasión al siguiente nivel. Diseños cómodos, 
            modernos y llenos de personalidad que no solo se ven bien, sino que cuentan historias. 
            Porque Full90 no es solo ropa: es cultura, emoción y estilo dentro y fuera de la cancha.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
