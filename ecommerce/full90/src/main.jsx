import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./contexts/ContextUser";
import { CartContextProvider } from "./contexts/ContextCart.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);