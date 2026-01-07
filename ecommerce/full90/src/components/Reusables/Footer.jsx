import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "./footer.module.css";
import Acordeon from "../Acordeon.jsx";
import logo from "/img/logo.webp";

function Footer() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/"); // Va a la página Home.
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerPrincipal}>
        <div className={styles.acordeonContainer}>
          <ul className={styles.listaEnlaces}>
            <li><Acordeon /></li>
            <li><NavLink to="/Nosotros">Nosotros</NavLink></li>
            <li><NavLink to="/Contacto">Contacto</NavLink></li>
          </ul>
        </div>
        <div className={styles.logoContainer}>
          <img onClick={handleHome} src={logo} />
        </div>
        <div className={styles.sociales}>
          <ul>
            <li><Icon icon="mdi:instagram" width="35px" height="35px" /></li>
            <li><Icon icon="ic:baseline-tiktok" /></li>
            <li><Icon icon="fa7-brands:youtube" /></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerSecundario}>
        <span>© 2025 Full90. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
