import React from 'react';

const CrudTableRow = (props) => {

    return(
        <tr>
            <td>{props.el.name}</td>
            <td>{props.el.color}</td>
            <td>
                <button onClick={() => props.setDataToEdit(props.el)}>Editar</button>
                <button onClick={() => props.deleteData(props.el.id)}>Borrar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;