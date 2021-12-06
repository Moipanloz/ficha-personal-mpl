import React from "react";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal1</button>
      {isOpenModal1 && (
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Modal 1</h3>
          <p>Hola este es el contenido de mi modal 1</p>
          <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </Modal>
      )}
      <hr />
      <button onClick={openModal2}>Modal2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Hola este es el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
    </div>
  );
};

export default Modals;
