import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
  useMatch,
  useParams,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>60 segundos son 1 minuto</p>
    </div>
  );
};

const ReactTopics = () => {
  //Ahora de base, el atributo to toma de base la url en la que se encuentra,
  //por lo que no hay que poner la ruta entera, sino que sigue sumando
  return (
    <div>
      <p>ReactTopics</p>
      <ul>
        <li>
          <NavLink to="jsx">
            <span>JSX</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="props">
            <span>Props</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="estado">
            <span>Estado</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="componente">
            <span>Componente</span>
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<p>Mucho react 1</p>} />
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </div>
  );
};

export default ReactTopics;
