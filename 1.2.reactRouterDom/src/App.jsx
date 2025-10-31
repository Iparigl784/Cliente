import "./styles/stylesGlobales.css"
import "./styles/stylesReusables.css"

import Home from "./pages/Home"
import Page2 from "./pages/Page2"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Contacto from "./pages/Contacto"
import BigLayout from "./pages/BigLayout"
import ProductDetail from "./pages/ProductDetail"
import PrivateRoute from "./pages/protected/PrivateRoutes"
import Dashboard from "./pages/Dashboard"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BigLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="home/:productId" element={<ProductDetail />} />
          <Route path="dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Route>
      </Routes >
    </>
  )
}

export default App
