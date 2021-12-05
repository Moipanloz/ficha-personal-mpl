import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El email introducido no es correcto";
  }

  if (!form.subject.trim()) errors.subject = "El campo 'Asunto' es requerido";

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no puede sobrepasar los 255 caracteres";
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>ContactForm</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "50%" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <p>{errors.subject}</p>}

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Comentarios"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        />
        {errors.comments && <p>{errors.comments}</p>}
        <input type="submit" value="Enviar" />

        {loading && <Loader />}
        {response && (
          <Message color="green" message="Los datos han sido enviados" />
        )}
      </form>
    </div>
  );
};

export default ContactForm;
