import "./styles/globalstyles.css";
import "./styles/App.css";

import { Routes, Route } from "react-router-dom";
import BigLayout from "./pages/BigLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Registro from "./pages/Registro";
import CajasSorpresa from "./pages/CajasSorpresa";
import Tienda from "./pages/Tienda";
import Carrito from "./pages/Carrito";
import Camiseta from "./pages/Camiseta";
import Caja from "./pages/Cajas";
import Perfil from "./pages/Perfil";
import SobreNosotros from "./pages/SobreNosotros";
import Admin from "./pages/Admin";
import Pago from "./pages/Pago";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* import { useEffect } from "react";
import { uploadCajas } from "./utils/uploadProducts";
import { uploadCamisetas } from "./utils/uploadProducts"; */

function App() {
/*   useEffect(() => {
    const upload = async () => uploadCajas();

    upload();
  }, []); 
  
  useEffect(() => {
    const upload = async () => uploadCamisetas();

    upload();
  }, []); */
  return (
    <>
      <Routes>
        <Route path="/" element={<BigLayout />}>
          <Route index element={<Home />} />
          <Route path="/CajasSorpresa" element={<CajasSorpresa />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/Tienda/:camisetaID" element={<Camiseta />} />
          <Route path="/CajasSorpresa/:cajaID" element={<Caja />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Pago" element={<Pago />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
