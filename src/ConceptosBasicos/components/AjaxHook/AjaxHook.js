import React, {useEffect, useState} from 'react';

function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <span>{props.name}</span>
        </figure>
    )
}

export default function AjaxHook(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        // Si necesitas usar funciones asincronas en el useEffect
        // no poner async en el callback de parametro, sino crearse
        // una funcion dentro y ahi lo ponemos y la llamamos
        const getPokemons = async (url) => {
            let res = await fetch(url),
            json = await res.json();

            json.results.forEach(async (pokemon) => {
                let res = await fetch(pokemon.url),
                json = await res.json();
                let pokamion = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }
                setPokemons((pokemons) => [...pokemons, pokamion]);
            });
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []); // Como tiene array vacio, equivale a didMount

    return(
        <>
            <h2>Asincronia en Hooks</h2>
            {pokemons.length === 0 ? <h3>Cargando</h3> : pokemons.map((el) => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
        </>

    );
}

