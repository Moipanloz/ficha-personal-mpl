import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helperHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = "http://localhost:5000/tortugas";

  const getData = () => {
    helpHttp()
      .get(url)
      .then(
        (res) => {
          if (!res.err) {
            setDb(res);
            setError(null);
          } else {
            setDb(null);
            setError(res.statusText);
          }
          setLoading(false);
        },
        (err) => {
          setDb(null);
          setError(err.statusText);
        }
      );
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .post(url, options)
      .then(
        (res) => getData(),
        (err) => setError(err.responseText)
      );
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .put(endpoint, options)
      .then(
        (res) => {
          getData();
          setError(null);
        },
        (err) => setError(err.responseText)
      );
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("¿Borrar?");
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      helpHttp()
        .del(endpoint, options)
        .then(
          (res) => getData(),
          (err) => setError(err.responseText)
        );
    } else {
      return;
    }
  };

  return (
    <>
      <div>
        <h2>CRUD Api</h2>
        {loading && <Loader />}
        {error && <Message message={error} color="#ff0000" />}
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          />
        )}
      </div>
    </>
  );
};

export default CrudApi;
