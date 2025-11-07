import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase";
import { validation } from "../utils/validationForm";
import { useDebouncedCallback } from "use-debounce";
import FormInput from "./FormInput";
import NewFormInput from "./NewFormInput";
 
function SignUpForm() {
  const emailRef = useRef(null);
  const displayNameRef = useRef(null);

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);




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

export default SignUpForm;