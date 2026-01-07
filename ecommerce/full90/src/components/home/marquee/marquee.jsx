import styles from "./marquee.module.css";

export default function Marquee() {
  const images = import.meta.glob(
    "/public/img/marquee/*.{png,jpg,jpeg,webp,svg}",
    {
      eager: true,
    }
  );

  const logos = Object.values(images).map((img) => img.default);

  const logosLoop = [...logos, ...logos];

  return (
    <div className={styles.marquee}>
      <div className={styles.marquee__track}>
        {logos.map((logo, index) => (
          <div className={styles.marquee__item} key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}

        {logos.map((logo, index) => (
          <div className={styles.marquee__item} key={`copy-${index}`}>
            <img src={logo} alt={`Logo copia ${index}`} />
          </div>
        ))}

        {logos.map((logo, index) => (
          <div className={styles.marquee__item} key={`copy-${index}`}>
            <img src={logo} alt={`Logo copia ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
