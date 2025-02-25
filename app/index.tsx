import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home"; // O donde esté tu archivo home.tsx
import "./app.css"; // Asegúrate de tener este archivo para los estilos

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
