import React from "react";

import { FiArrowLeftCircle, FiPlusCircle } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./styles.css";

import bag from "../../assets/bag.png";

export default function Checkout() {
  const storagedProducts = JSON.parse(localStorage.getItem("Products"));
  console.log(storagedProducts);
  return (
    <div>
      <Link to="/" className="arrow-back">
        <FiArrowLeftCircle size={35} color="#fff" />
      </Link>

      <div className="checkout-container">

        
        <h1 className="end-title">Finalizar pedido</h1>

        <img className="bag" src={bag} alt="bag" />

        <h1>FoxMarket</h1>

        <div className="checkout-content">
          <div className="checkout-list">
          <div className="products-list">
          {storagedProducts.map((item) => (
            <div key={item.id} className="list">
              <img className="drinks" src={item.image} alt="drinks" />

              <p>{item.name}</p>

              <h1>R$ {item.price}</h1>
            </div>
          ))}
        </div>

          </div>
        </div>
        <button className="button">Finalizar Compra</button>
      </div>
    </div>
  );
}
