import React from 'react';
import CrudApp from "./components/CrudApp";
import "./App.css";

function App() {
  return (
    <>
      <h1>Ejercicios</h1>
      <div className="ejercicioCard">
        <CrudApp />
      </div>
    </>
  );
}

export default App;
