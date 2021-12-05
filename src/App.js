import React from "react";
import CrudApp from "./components/CrudApp";
import "./App.css";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <h1>Ejercicios</h1>
      <div className="ejercicioCard">
        <ContactForm />
      </div>
      <hr />
      <div className="ejercicioCard">
        <SelectsAnidados />
      </div>
      <hr />
      <h1>Ejercicios</h1>
      <div className="ejercicioCard">
        <SongSearch />
      </div>
      <hr />
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
