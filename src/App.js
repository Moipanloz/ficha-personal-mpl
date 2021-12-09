import React from "react";
import "./App.css";
import Rutas from "./components/Rutas";

function App() {
  return (
    <>
      <h1>Rutas</h1>
      <a
        href="https://v5.reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        Documentacion
      </a>
      <hr />
      <Rutas />
    </>
  );
}

export default App;
