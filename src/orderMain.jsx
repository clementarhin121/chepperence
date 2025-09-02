import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./files/order.jsx"; // adjust path if needed
import "./index.css"; // import global styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Order />
  </StrictMode>
);
