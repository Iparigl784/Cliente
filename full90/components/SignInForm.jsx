import { useState } from "react";
import { signInWithGooglePopup } from "../utils/firebase";

function SignInForm() {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswd = (e) => {
        setPasswd(e.target.value);
    }

    const handleGoogle = (e) => {
        try{

        } catch(exception) {
            console.error("error", exception)
        }
    }

    return 
    <form action="">
        <div>
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={handleEmail} required>Email</input>
        </div>

        <div>
            <label htmlFor="">Password</label>
            <input type="password" value={passwd} onChange={handlePasswd} required>Password /</input>
        </div>

        <div>
            <button type="submit">Login con usuario y password</button>
            <button type="button" onChange={handleGoogle}>Login con Google</button>
        </div>
    </form>
}

export default SignInForm;