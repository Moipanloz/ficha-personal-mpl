import React, {useState} from 'react';

export default function ContadorHook(props){
    const [contador, setContador] = useState(0); //El 0 es el valor inicial, puede ser lo que sea
    // Para crear estados de forma mas sencilla que con los
    // componentes de clase
    const sumar = () => setContador(contador+1);
    const restar = () => setContador(contador-1);

    return(
        <>
            <h2>Hooks - UseState - Contador de {props.titulo}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>{contador}</p>
        </>
    )
}

ContadorHook.defaultProps = {
    titulo: "Clicks",
}
