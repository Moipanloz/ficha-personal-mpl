import { Component } from "react";

export class CicloVida extends Component{
    constructor(props){
        super(props);

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null;

        console.log(0,"C0 Init - aun no esta en DOM")
    }

    componentDidMount(){
        console.log(1,"C1 Mount - ya esta en DOM")
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2,"C2 Update - Estado o props actualizadas")
        console.log(prevProps)
        console.log(prevState)
    }

    render(){
        console.log(4,"C4 Render - se dibuja (o redibuja) en DOM")
        return(
            <div>
                <h2>CicloVida</h2>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </div>
        );
    }

    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true
        });
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        }); 
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
                visible: true
            });
        }, 1000);
    }
}

class Reloj extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log(3,"C3 Unmount - se elimina del DOM")
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
}