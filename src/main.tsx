import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CanvasBackground } from "./components/CanvasBackground";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Container } from "./components/ui/container.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TooltipProvider>
        <CanvasBackground />
        <Container>
          <App />
        </Container>
      </TooltipProvider>
    </Provider>
  </React.StrictMode>
);
