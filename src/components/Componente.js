import React, {Component} from "react";
// import "./Componente.css";


//=========== Como clase ===========

// class Componente extends Component {
//     render(){
//         return <h2>Hola soy un {mono}</h2>
//     }
// }


//=========== Como funcion ===========

// function Componente(props) {
//     return <h2>Hola soy un {props.mono}</h2>;
// }

//=========== Como arrow function ===========

const Componente = props => <h2>Hola soy un {props.mono}</h2>

export default Componente;