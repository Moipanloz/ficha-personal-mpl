import React, {useEffect, useState} from 'react';

export default function RelojHook(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temp;
        visible ? temp = setInterval(() => setHora(new Date().toLocaleTimeString()),1000) : clearInterval(temp);

        return () => clearInterval(temp); //Esto no es necesario, pero para limpiar cuando se desmonte el componente
    }, [visible]);
    
    return(
        <>
            <h2>Reloj Hook</h2>
            {visible && <Reloj hora={hora} />}
            <button onClick={() => setVisible(true)}>iniciar</button>
            <button onClick={() => setVisible(false)}>detener</button>
        </>
    )
}

function Reloj(props){
    return(
        <p>{props.hora}</p>
    )
}