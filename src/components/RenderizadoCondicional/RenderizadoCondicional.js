import { Component } from "react";

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: true,
        }
    }

    render(){
        return(
            <div>
                <h2>RenderizadoCondicional</h2>
                {/* ngIf wannabe */}
                {this.state.session ? <Login /> : <Logout />}
            </div>
        );
    }
}

function Login() {
    return(
        <h3>Login</h3>
    );
}

function Logout() {
    return(
        <h3>Logout</h3>
    );
}