import styles from "./modules/error.module.css";

function Error() {
  return (
    <main className={styles.error}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Página no encontrada</h2>
      <p className={styles.text}>
        Lo sentimos, la página que buscas no existe o ha sido movida. Verifica
        la dirección o vuelve a la página principal.
      </p>
    </main>
  );
}

export default Error;