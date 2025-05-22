import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";

// per rendere questi dati disponibili globalmente per qualsiasi componente nell’applicazione, bisogna importare i dati nel componente main.jsx.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// Il file store.js è importato all’interno di <React.StrictMode>.
// <Provider> da react-redux fornisce il negozio Redux a tutti i componenti all’interno della sua gerarchia passando store come props.
// Questo consente ai componenti, incluso <App />, di accedere e interagire con il negozio Redux per la gestione dello stato.
