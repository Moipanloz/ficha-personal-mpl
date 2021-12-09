import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  //Actualmente no funciona porque se han acabado los creditos del token
  const token = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

  return (
    <div>
      <h2>SELECTS</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <SelectList
          label="estado"
          url={`https://api.copomex.com/query/get_estados?token=${token}`}
          handleChange={(e) => {
            setState(e.target.value);
          }}
        />
        <SelectList
          label="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${token}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
        <SelectList
          label="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${token}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      </div>
      <hr />
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};
export default SelectsAnidados;
