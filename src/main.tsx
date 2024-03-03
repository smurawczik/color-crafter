import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CanvasBackground } from "./components/CanvasBackground";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CanvasBackground />
    <App />
  </React.StrictMode>
);
