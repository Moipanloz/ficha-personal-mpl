import React, { createRef, useRef } from 'react';

export default function Referencias(props){
    // En un componente de clase, se tiene que usar createRef en vez de useRef
    let refMenu = useRef(), refBoton = useRef();

    const handleToggleMenu = (e) => {
        // Esto sería sin referencias, con getElementById y tal (evitar) 

        // const $menu = document.getElementById("menu");
        // if(e.target.textContent === "Menu"){
        //     e.target.textContent = "Cerrar";
        //     $menu.style.display = "block";
        // }else{
        //     e.target.textContent = "Menu";
        //     $menu.style.display = "none";
        // }

        if(refBoton.current.textContent === "Menu"){
            refBoton.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }else{
            refBoton.current.textContent = "Menu";
            refMenu.current.style.display = "none";
        }


    }

    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refBoton} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                <a href="#">Seccion 1</a>
                <br />
                <a href="#">Seccion 2</a>
                <br />
                <a href="#">Seccion 3</a>
                <br />
                <a href="#">Seccion 4</a>
                <br />
                <a href="#">Seccion 5</a>
            </nav>
        </>
    )
}