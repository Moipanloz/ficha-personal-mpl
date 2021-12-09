import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import Acerca from "./Acerca";
import Contacto from "./Contacto";
import Error404 from "./Error404";
import Home from "./Home";

const Rutas = () => {
  return (
    <div>
      <h2>Rutas</h2>
      <Router>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/about">
          <h3>Acerca</h3>
        </Link>
        <Link to="/contact">
          {/* Se puede hacer con etiquetas <a>, pero no se recomienda ya que 
          recarga la pagina entera, a diferencia del Link que solo carga el componente */}
          <h3>Contacto</h3>
        </Link>

        <hr />

        {/* De esta forma se pueden poner los efectos CSS para los enlaces activos 
        Automaticamente se le aplica la clase "active" en aquella ruta en la que este, por
        lo que con definir el CSS ya vale*/}
        <NavLink exact to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink exact to="/about">
          <h3>Acerca</h3>
        </NavLink>
        <NavLink exact to="/contact">
          <h3>Contacto</h3>
        </NavLink>

        <hr />

        <Routes>
          <Route exact path="/about" element={<Acerca />} />
          <Route exact path="/contact" element={<Contacto />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Rutas;
