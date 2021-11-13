import { Component } from "react";
import data from "../../helpers/data.json";

export default class RenderizadoLista extends Component{
    constructor(props){
        super(props);
        this.state = {
            lista: ["uno", "dos", "tres", "cuatro"],
        }
    }

    render(){
        return(
            <div>
                <h2>RenderizadoLista</h2>
                <ul>
                    {this.state.lista.map((el, index) => <li key={index}>{el}</li>)}
                    <li>--------------</li>
                    {data.frameworks.map(el => <ElementoLista key={el.id} elemento={el} />)}
                </ul>
            </div>
        );
    }
}

function ElementoLista(props){
    return(
     <li>
         <a href={props.elemento.web}>{props.elemento.name}</a>
     </li>   
    );
}