import React from "react";
import { useParams } from "react-router-dom";

const Usuario = () => {
  let { username } = useParams();

  return (
    <div>
      <h3>Perfil de Usuario</h3>
      <p>Nombre: {username}</p>
    </div>
  );
};

export default Usuario;
