import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { darkTheme, Provider } from "@adobe/react-spectrum";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider theme={darkTheme} colorScheme="dark">
      <App />
    </Provider>
  </React.StrictMode>
);
