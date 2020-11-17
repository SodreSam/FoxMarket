import React, { useEffect, useState } from "react";

import { FiArrowLeftCircle, FiCheck, FiPlusCircle } from "react-icons/fi";

import { Link } from "react-router-dom";

import Modal from "react-modal";

import "./styles.css";

import bag from "../../assets/bag.png";

export default function Checkout() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const storagedProducts = JSON.parse(localStorage.getItem("Products"));
  console.log(storagedProducts);
  return (
    <div>
      <Link to="/" className="arrow-back">
        <FiArrowLeftCircle size={35} color="#fff" />
      </Link>

      <div className="checkout-container">
        <h1 className="end-title">Finalizar pedido</h1>

        <h1>FoxMarket</h1>

        <div className="checkout-content">
          <img className="bag" src={bag} alt="bag" />
          <div className="checkout-list">
            <div className="products-list">
              {storagedProducts.map((item) => (
                <div key={item.id} className="list">
                  <img className="drinks" src={item.image} alt="drinks" />

                  <p>{item.name}</p>

                  <h1>R$ {item.price}</h1>
                  <p>{item.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={openModal} className="button">
          Finalizar Compra
        </button>
        <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setIsOpen(false)}
          >
            <FiCheck className="done" size={35} color="#fff" />
            <h1>Pedido realizado com sucesso!</h1>
            <button className="button" npm>
              Fechar
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
