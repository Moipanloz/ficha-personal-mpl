import React, { Component } from 'react';

export default class AjaxApis extends Component {
    state = {
        pokemons: []
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url).then((res) => res.json()).then((json) => {
            json.results.forEach((pokemon) => {
                fetch(pokemon.url).then((pk) => pk.json()).then((pkj) => {
                    let pokamion = {
                        id: pkj.id,
                        name: pkj.name,
                        avatar: pkj.sprites.front_default
                    }

                    let pokemons = [...this.state.pokemons, pokamion];
                    this.setState({ pokemons }); //como se llaman igual no hace falta pooiner pokemons: pokemons
                });
            });
        });
    }

    render(){
        return(
            <>
                <h2>Ajax y Apis - POKAMION </h2>
                {this.state.pokemons.length === 0 ? <p>Cargando</p> : this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
            </>
        )
    }
}

function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaptin>{props.name}</figcaptin>
        </figure>
    )
}