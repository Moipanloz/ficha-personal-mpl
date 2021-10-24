import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export default function HooksPersonalizados(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let {data, isPending, error } = useFetch(url);
    return(
        <>
            <h2>Hooks Personalizados</h2>
            <p>{JSON.stringify(isPending)}</p>
            <p>{JSON.stringify(error)}</p>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}