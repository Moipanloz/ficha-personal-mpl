import React, { useState } from 'react';
import CrudForm from "./CrudForm";
import CrudTable from './CrudTable';

const initialDB = [
    {
        id: 1,
        color: "rojo",
        name: "Rafael"
    },{
        id: 2,
        color: "naranja",
        name: "Michellangelo"
    },{
        id: 3,
        color: "morado",
        name: "Donatello"
    },{
        id: 4,
        color: "azul",
        name: "Leonardo"
    }
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    }

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm('¿Borrar?');
        if(isDelete){
            let newData = db.filter(el => el.id != id)
            setDb(newData);
        }else{
            return;
        }
    }
    
    return(
        <>
            <div>
                <h2>CRUD APP</h2>
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>
            </div>
        </>
    )
}

export default CrudApp;