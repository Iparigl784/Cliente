import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const isAuth = false; /* Comprobar en el LS si está logeado */

    if (!isAuth) {
        return <Navigate to="/login"/>;
    }

    return children;
}

export default PrivateRoute;