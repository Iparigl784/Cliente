import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/ContextUser";
import { useContext, useState } from "react";
import { signOutUser } from "../../utils/firebase";
import { Icon } from "@iconify/react";
import logo from "/img/logo.webp";
import styles from "./header.module.css";
import { toast } from "react-toastify";

function Header() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleLogout = async () => {
    try {
      await signOutUser();
      setCurrentUser(null);
      toast.success("Se ha cerrado la sesión correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.div}>
        {/* MENU HAMBURGUESA (solo móvil) */}
        <div className={styles.menuMobile}>
          <Icon
            icon={menuAbierto ? "mdi:close" : "mdi:menu"}
            onClick={() => setMenuAbierto(!menuAbierto)}
          />
        </div>

        {/* BUSQUEDA */}
        <div className={styles.busquedaContainer}>
          <Icon icon="hugeicons:search-01" />
        </div>

        {/* LOGO */}
        <div className={styles.logoContainer}>
          <img src={logo} onClick={() => navigate("/")} />
        </div>

        {/* ICONOS USUARIO */}
        <div className={styles.adminContainer}>
          <Icon icon="mage:user" onClick={() => navigate(currentUser ? "/Perfil" : "/Login")} />
          {currentUser && (
            <Icon icon="pepicons-pencil:leave" onClick={handleLogout} />
          )}
          <Icon icon="famicons:bag-outline" onClick={() => navigate("/Carrito")} />
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`${styles.navbar} ${menuAbierto ? styles.navAbierto : ""}`}>
        <div className={styles.navContainer}>
          <ul>
            <li>
              <NavLink to="/Tienda" onClick={() => setMenuAbierto(false)}>
                Camisetas de Fútbol
              </NavLink>
            </li>
            <li><span>|</span></li>
            <li>
              <NavLink to="/CajasSorpresa" onClick={() => setMenuAbierto(false)}>
                Cajas Sorpresa
              </NavLink>
            </li>
            <li><span>|</span></li>
            <li>
              <NavLink to="/SobreNosotros" onClick={() => setMenuAbierto(false)}>
                Nosotros
              </NavLink>
            </li>
            <li><span>|</span></li>
            <li>
              <NavLink to="/Contacto" onClick={() => setMenuAbierto(false)}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
