import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = (props) => {
  return (
    <div>
      <h3>Tabla</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length > 0 ? (
            props.data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={props.setDataToEdit}
                deleteData={props.deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
