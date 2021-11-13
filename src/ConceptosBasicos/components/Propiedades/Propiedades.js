import React from "react";
import PropTypes, { number } from "prop-types";

export default function Propiedades(props) {
    return(
        <>
            <div>
                <h2>Propiedades, {props.porDefecto}</h2>
            </div>
            <ul>
                <li>{props.boolean ? "si" : "no"}</li>
                {props.listaPapas.map((papa, index) => <li key={index}>{papa}</li>)}
                <li>{props.numero}</li>
                <li>{props.listaPapas.join(", ")}</li>
                <li>{props.objeto.nombre}</li>
                <li>{props.elemento}</li>
                <li>{props.funsion(5)}</li>
                <li>{props.componente}</li>
            </ul>
        </>
    );
}

// defaultProps es nombre reservado, tiene que llamarse asi
Propiedades.defaultProps = {
    porDefecto: "bon dia"
}

// Es como una interfaz, sirve para indicar el tipo de las propiedades
// y para marcarlas como obligatorias o no, validaciones, etc
// (es un modulo aparte)
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}