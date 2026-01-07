import { useState, useContext, useRef } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { validation } from "../utils/validationForm";
import { useDebouncedCallback } from "use-debounce";
import FormInput from "./NewFormInput";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/ContextUser";
import logo from "/img/logo.webp";
import styles from "../pages/modules/registro.module.css";
import { toast } from "react-toastify";

function SignUpFormEstadosAgrupados() {
  const emailRef = useRef(null);
  const displayNameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const [serverError, setServerError] = useState(null);

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    displayName: null,
  });

  const debounceEmail = useDebouncedCallback(() => {
    setErrors((prev) => ({
      ...prev,
      email: validation.isValidEmail(emailRef.current.value)
        ? null
        : "Email incorrecto",
    }));
  }, 3000);

  const debouncePasswd = useDebouncedCallback(() => {
    setErrors((prev) => ({
      ...prev,
      password: validation.isValidPassword(passwordRef.current.value)
        ? null
        : "Contraseña incorrecta",
    }));
  }, 3000);

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (serverError) setServerError(null);

    const name = displayNameRef.current.value.trim();
    if (!name) {
      setErrors((prev) => ({
        ...prev,
        displayName: "Nombre no puede estar vacío",
      }));
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrors((prev) => ({
        ...prev,
        password: "Las contraseñas no coinciden",
      }));
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );

      await createUserDocumentFromAuth(user, {
        displayName: displayNameRef.current.value,
        rol: "user",
      });
      setCurrentUser(user);

      console.log("User created:", user);
      toast.success("Usuario creado correctamente") + navigate("/");
    } catch (error) {
      toast.error("Error al registrar un usuario");
      if (error.code === "auth/email-already-in-use") {
        setServerError("El email ya está registrado");
      } else if (error.code === "auth/weak-password") {
        setServerError("La contraseña es demasiado débil");
      } else {
        setServerError("Error inesperado al registrar usuario");
        console.error(error);
      }
    }
  };

  const handleHome = () => {
    navigate("/"); // Va a la página Home.
  };

  const handleBack = () => {
    navigate(-1); // Va a la página anterior en el historial
  };

  return (
    <>
      {serverError && <p>{serverError}</p>}
      <main className={styles.loginMain}>
        <div className={styles.loginContainer}>
          <img onClick={handleHome} src={logo}></img>
          <h2>Registro</h2>
          <form onSubmit={handleSignUp}>
            <FormInput
              className={styles.loginInput}
              id="email"
              type="email"
              placeholder="Email"
              ref={emailRef}
              onChange={debounceEmail}
              error={errors.email}
              required
            />

            <FormInput
              className={styles.loginInput}
              id="displayName"
              type="text"
              placeholder="Nombre"
              ref={displayNameRef}
              error={errors.displayName}
              required
            />

            <FormInput
              className={styles.loginInput}
              id="passwd"
              type="password"
              placeholder="Contraseña"
              ref={passwordRef}
              onChange={debouncePasswd}
              error={errors.password}
              required
            />

            <FormInput
              className={styles.loginInput}
              id="confirmPassword"
              type="password"
              placeholder="Confirmar contraseña"
              ref={confirmPasswordRef}
              required
            />

            <div className={styles.loginButtons}>
              <button type="submit" className={styles.loginButton}>
                Continuar
              </button>

              <div className={styles.loginFooter}>
                <a onClick={handleBack}>Volver</a>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default SignUpFormEstadosAgrupados;
