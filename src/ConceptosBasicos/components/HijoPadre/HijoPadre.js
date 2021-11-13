import { Component } from "react";

export class HijoPadre extends Component{
    state = {
        contador: 0
    }

    render(){
        return(
            <div>
                <h2>HijoPadre</h2>
                <p>Padre</p>
                <Hijo msg="come tu papa" eAddContador={this.addContador} />
                <p>{this.state.contador}</p>
            </div>
        );
    }

    addContador = (e) => {
        this.setState({
            contador: this.state.contador+1
        });
    }
}

function Hijo(props){
    return(
        <>
            {/* Para pasar de padre a hijo -> a traves de props */}
            <p>{props.msg}</p>
            {/* Para pasar de hijo a padre -> a traves de eventos en props */}
            <button onClick={props.eAddContador}>+</button>
        </>
    )
}