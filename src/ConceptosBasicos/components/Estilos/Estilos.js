import React from 'react';
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

export default function Estilos() {
    let myStyles = {
        padding: "2rem",
        color: "yellow"
    }
    return(
        <section className="estilos">
            <h2>Estilos</h2>
            <p style={myStyles}>Hola que pasa</p>
            {/* Create React App tiene una hoja de estilos normalize que se puede
            importar en la hoja de estilos padre @import-normalize */}
            <p>Esto es @normalize</p>

            {/* Hacerlo por una hoja de estilos modulada sirve para que el
            selector de clase que se le genera en el DOM sea algo mas especifico
            y evitar asi coincidencias */}
            <span className={moduleStyles.error}>Error</span>
            <span className={moduleStyles.success}>Success</span>
            <p className="bg-sass">Esto tiene SASS</p>
        </section>
    )
}