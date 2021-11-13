import React, {useEffect, useState} from 'react';

export default function ScrollHook(props){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // console.log("Scrolling")
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);

        return () => window.removeEventListener("scroll", detectarScroll);
    }, [scrollY]);

    //Puede haber tantos useEffect como quieras

    useEffect(() => {
        // console.log("Fase de update general")
    })
    //Si no se le indica el segundo parametro (aunque sea un array vacio)
    //equivale a un componentDidUpdate()

    useEffect(() => {
        // console.log("Fase de montaje")
    }, [])
    //Si se le pasa el segundo parametro vacio equivale
    //a un componentDidMount()

    useEffect(() => {
        // console.log("Scroll update")
    }, [scrollY])
    //Si se le pasa una variable de estado como parametro, se ejecuta
    //siempre que cambie dicha variable (esto es lo recomendable, no dejarlo vacio a ser posible)

    useEffect(() => {
        return () => {
            // console.log("Fase de desmontaje")
        };
    })
    //Si se le declara un return, lo que este dentro del return equivale al componentDidUnmount()

    return(
        <>
            <h2>ScrollHook - UseEffect</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}