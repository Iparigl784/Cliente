import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { validation } from "../utils/validationForm";
import { useDebouncedCallback } from "use-debounce";
import FormInput from "./NewFormInput";
import { UserContext } from "../contexts/ContextUser";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "/img/logo.webp";
import { toast } from "react-toastify";
import styles from "../pages/modules/login.module.css";

function SignInForm() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPasswd, setErrorPasswd] = useState(null);

  const debounceEmail = useDebouncedCallback((currentEmail) => {
    if (!validation.isValidEmail(currentEmail)) {
      setErrorEmail("email incorrecto");
    } else {
      setErrorEmail(null);
    }
  }, 3000);

  const handleEmail = (event) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
    debounceEmail(currentEmail);
  };

  const debouncePasswd = useDebouncedCallback((currentPasswd) => {
    if (!validation.isValidPassword(currentPasswd)) {
      setErrorPasswd("contraseña incorrecta");
    } else {
      setErrorPasswd(null);
    }
  }, 3000);

  const handleHome = () => {
    navigate("/"); // Va a la página Home.
  };

  const handlePasswd = (event) => {
    const currentPasswd = event.target.value;
    setPasswd(currentPasswd);
    debouncePasswd(currentPasswd);
    //debouncePasswd(passwd);
  };

  const handleGoogle = async () => {
    try {
      const responseAuth = await signInWithGooglePopup();

      const responseDatabase = await createUserDocumentFromAuth(
        responseAuth.user,
        {
          rol: "admin",
        }
      );
      navigate("/");
      toast.success("Sesión iniciada correctamente")
    } catch (exception) {
      console.error("movida error", exception);
      toast.error("Error al inicar sesión")
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, passwd);
      console.log(response);
      navigate("/");
      toast.success("Sesión iniciada correctamente")
    } catch (error) {
      console.log("error", error);
      toast.error("Error al inicar sesión")
    }
  };

  const handleRegistro = () => {
    navigate("/Registro"); // Va a la página de registro
  };

  return (
  <main className={styles.loginMain}>
    <div className={styles.loginContainer}>
      <img onClick={handleHome} src={logo}></img>
      <h2 className={styles.loginTitle}>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>

        <FormInput
          className={styles.loginInput}
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          error={errorEmail}
          required
        />

        <FormInput
          className={styles.loginInput}
          id="passwd"
          type="password"
          placeholder="Contraseña"
          value={passwd}
          onChange={handlePasswd}
          error={errorPasswd}
          required
        />

        <div className={styles.loginButtons}>
          <button type="submit" className={styles.loginButton}>
          Continuar
          </button>

          <Icon
            onClick={handleGoogle}
            icon="material-icon-theme:google"
          />
        </div>
      </form>

      <p className={styles.loginFooter}>
        ¿No tienes cuenta?
        <a onClick={handleRegistro}>
          Regístrate
        </a>
      </p>
    </div>
  </main>
);

}

export default SignInForm;