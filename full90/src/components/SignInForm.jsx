import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase";
import { validation } from "../utils/validationForm";
import { useDebouncedCallback } from "use-debounce";
import FormInput from "./FormInput";
import NewFormInput from "./NewFormInput";
 
function SignInForm() {
  const [email, setEmail] = useState(undefined);
  const [passwd, setPasswd] = useState(undefined);

  const [emailError, setErrorEmail] = useState(undefined);
  const [passwdError, setErrorPasswd] = useState(undefined);

  const useDebounceEmail = useDebouncedCallback((currentEmail) => {
    if (!validation.isValidEmail(currentEmail)) {
      setErrorEmail("Email invalido");
    } else {
      setErrorEmail(undefined)
    }
  }, 1000)

  const useDebouncePasswd = useDebouncedCallback((currentPasswd) => {
    if (!validation.isValidPassword(currentPasswd)) {
      setErrorPasswd("Contraseña invalido");
    } else {
      setErrorPasswd(undefined);
    }
  }, 1000)

  const handleEmail = (event) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
    useDebounceEmail(currentEmail);
  };

  const handlePasswd = (event) => {
    const currentPasswd = event.target.value;
    setPasswd(currentPasswd);
    useDebouncePasswd(currentPasswd);
  };

  const handleGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log("respuesta auth", response);
      const responseDatabase = await createUserDocumentFromAuth(response.user, {rol: "admin",});
    } catch (exception) {
      console.error("movida error", exception);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={handleEmail}
        error={emailError}
        required
      />

      <FormInput
        label="Password"
        id="passwd"
        type="password"
        value={passwd}
        onChange={handlePasswd}
        error={passwdError}
        required
      />

      <div>
        <button type="submit">Login con usuario y passwd</button>
        <button type="button" onClick={handleGoogle}>
          Login con Google
        </button>
      </div>
    </form>
  );
}

export default SignInForm;