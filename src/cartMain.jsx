import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // import global styles
import Cart from "./files/cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cart />
  </StrictMode>
);
