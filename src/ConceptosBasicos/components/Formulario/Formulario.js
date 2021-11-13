import React, {useState} from 'react';

// Esta es la versión con una varibale de stado por input

// export default function Formulario(props){
//     const [nombre, setNombre] = useState("");
//     const [macaco, setMacaco] = useState("");
//     const [aguacate, setAguacate] = useState("");
//     const [gusto, setGusto] = useState(false);

//     const handleSubmit = e => {
//         e.preventDefault();
//         alert("El formulario se ha enviado");
//     }

//     return(
//         <>
//             <h2>Formulario</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="nombre">Nombre:</label>
//                 <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

//                 <p>Elige el mejor macaco:</p>
//                 <input defaultChecked type="radio" id="babuino" name="macaco" value="babuino" onChange={(e) => setMacaco(e.target.value)}/>
//                 <label htmlFor="babuino">babuino</label>
//                 <input type="radio" id="gibon" name="macaco" value="gibon" onChange={(e) => setMacaco(e.target.value)}/>
//                 <label htmlFor="gibon">gibon</label>
//                 <input type="radio" id="capuchino" name="macaco" value="capuchino" onChange={(e) => setMacaco(e.target.value)}/>
//                 <label htmlFor="capuchino">capuchino</label>
//                 <input type="radio" id="chimpance" name="macaco" value="chimpance" onChange={(e) => setMacaco(e.target.value)}/>
//                 <label htmlFor="chimpance">chimpance</label>
//                 <input type="radio" id="gorila" name="macaco" value="gorila" onChange={(e) => setMacaco(e.target.value)}/>
//                 <label htmlFor="gorila">gorila</label>

//                 <p>Elige la textura del aguacate:</p>
//                 <select defaultValue="" name="aguacate" onChange={(e) => setAguacate(e.target.value)}>
//                     <option value="">---</option>
//                     <option value="rugoso">Rugoso</option>
//                     <option value="suave">Suave</option>
//                 </select>

//                 <p>¿Te gusto el formulario?:</p>
//                 <input type="checkbox" id="gusto" name="gusto" onChange={(e) => setGusto(e.target.checked)}/>
//                 <label htmlFor="gusto">Si</label>

//                 <input type="submit" />
//             </form>
//         </>
//     )
// }

export default function Formulario(props){
    const [form, setForm] = useState({});

    const handleChange = e => {
        // Esta magia lo que hace es que el formulario es un solo objeto con una propiedad por input
        // lo que hace es que le setea el valor a lo que ya tenia antes (...form) y ademas coge
        // el nombre del input que ha generado el evento, en caso de que ya exista lo sobreescribe
        // y si no, lo añade (con los [] se hace eso)
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    const handleChecked = e => {
        // Lo mismo pero para valores boolean
        setForm({
            ...form,
            [e.target.name] : e.target.checked
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return(
        <>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} />

                <p>Elige el mejor macaco:</p>
                <input defaultChecked type="radio" id="babuino" name="macaco" value="babuino" onChange={handleChange}/>
                <label htmlFor="babuino">babuino</label>
                <input type="radio" id="gibon" name="macaco" value="gibon" onChange={handleChange}/>
                <label htmlFor="gibon">gibon</label>
                <input type="radio" id="capuchino" name="macaco" value="capuchino" onChange={handleChange}/>
                <label htmlFor="capuchino">capuchino</label>
                <input type="radio" id="chimpance" name="macaco" value="chimpance" onChange={handleChange}/>
                <label htmlFor="chimpance">chimpance</label>
                <input type="radio" id="gorila" name="macaco" value="gorila" onChange={handleChange}/>
                <label htmlFor="gorila">gorila</label>

                <p>Elige la textura del aguacate:</p>
                <select defaultValue="" name="aguacate" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="rugoso">Rugoso</option>
                    <option value="suave">Suave</option>
                </select>

                <p>¿Te gusto el formulario?:</p>
                <input type="checkbox" id="gusto" name="gusto" onChange={handleChecked}/>
                <label htmlFor="gusto">Si</label>

                <input type="submit" />
            </form>
        </>
    )
}