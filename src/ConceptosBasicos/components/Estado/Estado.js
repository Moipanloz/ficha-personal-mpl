import { Component } from "react";

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };

        // setInterval(() => {
        //     // Hay que modificar el estado mediante la funcion, no se 
        //     // puede hacer directamente
        //     this.setState({
        //         contador: this.state.contador+1
        //     });
        // }, 1000);
    }

    render(){
        return(
            <div>
                <h2>Estado</h2>
                <p>{this.state.contador}</p>
            </div>
        );
    };
}