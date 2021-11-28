import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ label, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  if (error) {
    return (
      <Message
        message={`Error ${error.status}: ${error.statusText}`}
        color="#dc3545"
      />
    );
  } else if (!data && !error) return null;

  let id = `select-${label}`;
  let title = label.charAt(0).toUpperCase() + label.slice(1);
  let options = data.response[label];

  return (
    <div>
      <label htmlFor={id}>{title}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {label}</option>
        {data && options.map((el) => <option value={el}>{el}</option>)}
      </select>
    </div>
  );
};

export default SelectList;
