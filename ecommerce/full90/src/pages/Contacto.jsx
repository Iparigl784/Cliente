import banner from "/img/banner-contacto.webp";
import FormInput from "../components/NewFormInput";
import styles from "../pages/modules/contacto.module.css";

function Contacto() {
  return (
    <main>
      <div className={styles.principalContainer}>
        <div className={styles.contactoContainer}>
          <div className={styles.bannerContainer}>
            <img src={banner} alt="" />
          </div>

          <div className={styles.formContainer}>
            <h2>Contáctanos</h2>
            <form>
              <FormInput
                className={styles.contactoInput}
                id="nombre"
                type="text"
                placeholder="Nombre y Apellidos"
                required
              />

              <FormInput
                className={styles.contactoInput}
                id="email"
                type="email"
                placeholder="Email"
                required
              />

              <FormInput
                className={styles.contactoInput}
                id="mensaje"
                type="text"
                placeholder="Mensaje"
                textarea
                rows="5"
                required
              />

              <button type="submit" className={styles.contactoButton}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacto;
