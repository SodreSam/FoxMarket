import React, { useEffect, useState } from "react";

import { FiArrowLeftCircle, FiCheck, FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import { Link } from "react-router-dom";

import Modal from "react-modal";

import "./styles.css";

import bag from "../../assets/bag.png";

export default function Checkout() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const storagedProducts = JSON.parse(localStorage.getItem("Products")) || [];
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

                  <h1>R$ {item.price * (item.count || 1)}</h1>

                  <FiMinusCircle/>
                  <p>{item.count}</p>
                  <button className="plus"onClick={item.count++}> <FiPlusCircle size={20}/></button>
                </div>
              ))}
               <div className="total">Total: R$
                    {storagedProducts.reduce((a, b) => a + (b.price * (b.count||1)), 0)}
              </div>
            </div>
          </div>
        </div>
        


        </div>
      </div>
  );
}
