import React from "react";
import CrudApp from "./components/CrudApp";
import "./App.css";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <>
      <h1>Ejercicios</h1>
      <div className="ejercicioCard">
        <CrudApi />
      </div>
      <hr />
      <div className="ejercicioCard">
        <CrudApp />
      </div>
    </>
  );
}

export default App;
