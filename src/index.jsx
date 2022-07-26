import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
  
);