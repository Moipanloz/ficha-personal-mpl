import React, { useEffect, useState } from 'react';

const CrudForm = (props) => {
    const initialForm = {id: null, name:"", color:""};
    const [form, setForm] = useState(initialForm);

    useEffect(() =>{
        if(props.dataToEdit){
            setForm(props.dataToEdit);
        }else{
            setForm(initialForm);
        }
    }, [props.dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.color){
            alert("Datos incompletos");
            return;
        }

        if(form.id === null){
            props.createData(form);
        }else{
            props.updateData(form);
        }
    }

    const handleReset = (e) => {
        setForm({
            name: "",
            color: "",
            id: null
        });

        props.setDataToEdit(null);
    }

    return(
        <>
            <div>
                <h3>{props.dataToEdit === null ? "Añadir" : "Editar"}</h3>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Nombre" />
                    <input onChange={handleChange} value={form.color} type="text" name="color" placeholder="Color" />
                    <input  type="submit" value="Enviar" />
                    <input  type="reset" value="Limpiar" onClick={handleReset}/>
                </form>
            </div>
        </>
    )
}

export default CrudForm;