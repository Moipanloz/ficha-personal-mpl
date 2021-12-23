import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import Acerca from "./Acerca";
import Contacto from "./Contacto";
import Error404 from "./Error404";
import Home from "./Home";
import Productos from "./Productos";
import Usuario from "./Usuario";

const Rutas = () => {
  return (
    <div>
      <h2>Rutas</h2>
      <Router>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/contact">
          {/* Se puede hacer con etiquetas <a>, pero no se recomienda ya que 
          recarga la pagina entera, a diferencia del Link que solo carga el componente */}
          <span>Contact</span>
        </Link>

        <hr />

        {/* De esta forma se pueden poner los efectos CSS para los enlaces activos 
        Automaticamente se le aplica la clase "active" en aquella ruta en la que este, por
        lo que con definir el CSS ya vale*/}
        <h2>Rutas con CSS</h2>
        <NavLink exact="true" to="/">
          <span>Home</span>
        </NavLink>
        <NavLink exact="true" to="/about">
          <span>About</span>
        </NavLink>
        <NavLink exact="true" to="/contact">
          <span>Contact</span>
        </NavLink>

        <hr />

        <h2>Parámetros</h2>
        <NavLink to="/usuario/moi">
          <span>Moi</span>
        </NavLink>
        <NavLink to="/usuario/alberto">
          <span>Alberto</span>
        </NavLink>

        <hr />

        <h2>Parámetros de consulta</h2>
        <NavLink to="/productos?inicio=1&fin=20">
          <span>Productos</span>
        </NavLink>

        <hr />

        <h2>Redirecciones</h2>
        <NavLink to="/acerca">
          <span>Acerca</span>
        </NavLink>
        <NavLink to="/contacto">
          <span>Contacto</span>
        </NavLink>

        <hr />

        <Routes>
          <Route exact="true" path="/about" element={<Acerca />} />
          <Route
            exact="true"
            path="/acerca"
            element={<Navigate to="/about" />}
          />
          <Route exact="true" path="/contact" element={<Contacto />} />
          <Route
            exact="true"
            path="/contacto"
            element={<Navigate to="/contact" />}
          />
          <Route exact="true" path="/usuario/:username" element={<Usuario />} />
          <Route exact="true" path="/productos" element={<Productos />} />
          <Route exact="true" path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Rutas;
