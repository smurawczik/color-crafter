import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CanvasBackground } from "./components/CanvasBackground";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Container } from "./components/ui/container.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CanvasBackground />
      <Container>
        <App />
      </Container>
    </Provider>
  </React.StrictMode>
);
