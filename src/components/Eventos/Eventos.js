import { render } from "@testing-library/react";
import { Component } from "react";
import Componente from "../Componente/Componente";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        };

        // Esto es necesario por los contextos de js
        this.aumentaContador = this.aumentaContador.bind(this);
        this.decreaseContador = this.decreaseContador.bind(this);
    }

    render(){
        return(
            <div>
                <h2>EventosES6</h2>
                <p>{this.state.contador}</p>
                <button onClick={this.aumentaContador}>+1</button>
                <button onClick={this.decreaseContador}>-1</button>
            </div>
        );
    }

    aumentaContador(){
        this.setState({
            contador: this.state.contador+1
        });
    }

    decreaseContador(){
        this.setState({
            contador: this.state.contador-1
        });    
    }
}

export class EventosES7 extends Component{

    state = {
        contador: 0
    };

    render(){
        return(
            <div>
                <h2>EventosES7</h2>
                <p>{this.state.contador}</p>
                <button onClick={this.aumentaContador}>+1</button>
                <button onClick={this.decreaseContador}>-1</button>
            </div>
        );
    }

    // Las arrow function hacen que no haga falta usar el bind
    aumentaContador = (e) => {
        this.setState({
            contador: this.state.contador+1
        });
    }

    decreaseContador = (e) =>{
        this.setState({
            contador: this.state.contador-1
        });    
    }
}

export class EventosPlus extends Component {
    render(){
        return(
            <div>
                <h2>EventosPlus</h2>
                <button onClick={(e) => this.handleClick(e, "Esto eh un mensaje")}>Saludar</button>

                {/* Evento personalizado */}
                <EventosBoton myOnClick={(e) => this.handleClick(e, "Esto eh un mensaje de boton")} />
            </div>
        );
    }

    handleClick = (e, msg) => {
        // Evento Sintético (capa extra de React)
        console.log(e)
        console.log(e.target)

        // Evento nativo
        console.log(e.nativeEvent)
        console.log(e.nativeEvent.target)

        // Para pasarle mas parametros aparte del evento, hay que ponerlo en arrowfunc y con ()
        console.log(msg)
    }
}

function EventosBoton(props) {
    // Para pasarle un evento personalizado, se le pasa el evento como prop y el hijo ejecuta 
    // el prop con el evento JSX
    return(
        <button onClick={props.myOnClick}>Componente Boton</button>
    )
}


