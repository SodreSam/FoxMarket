import React, { useState } from "react";
import Select from "react-select";
import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./styles.css";

import coca from "../../assets/coca.png";
import fanta from "../../assets/fanta.png";
import bolo from "../../assets/bolo.png";

const options = [
  { id: 0, value: "Bebidas", label: "Bebidas" },
  { id: 1, value: "Doces", label: "Doces" },
  { id: 2, value: "Salgados", label: "Salgados" }
];

const items = [
  {
    id: 0,
    idCategory: 0,
    name: "Fanta Uva Lata",
    description: "Fanta Uva lata 350ml",
    price: 3.5,
    image: fanta
  },
  {
    id: 1,
    idCategory: 0,
    name: "Fanta Uva Lata",
    description: "Fanta Uva lata 350ml",
    price: 3.5,
    image: coca
  },
  {
    id: 2,
    idCategory: 1,
    name: "Bolo de Chocolate",
    description: "Bolo de Chocolate",
    price: 5.0,
    image: bolo
  },
  {
    id: 3,
    idCategory: 0,
    name: "Fanta Uva Lata",
    description: "Fanta Uva lata 350ml",
    price: 3.5,
    image: fanta
  },
  {
    id: 4,
    idCategory: 0,
    name: "Fanta Uva Lata",
    description: "Fanta Uva lata 350ml",
    price: 3.5,
    image: fanta
  },
  {
    id: 5,
    idCategory: 0,
    name: "Fanta Uva Lata",
    description: "Fanta Uva lata 350ml",
    price: 3.5,
    image: fanta
  },
  {
    id: 6,
    idCategory: 1,
    name: "Bolo de Chocolate",
    description: "Bolo de Chocolate",
    price: 5.0,
    image: bolo
  },
  {
    id: 7,
    idCategory: 2,
    name: "Fanta Uva Lata",
    description: "Fanta Uva lata 350ml",
    price: 3.5,
    image: fanta
  },
  {
    id: 8,
    idCategory: 0,
    name: "Bolo de Chocolate",
    description: "Bolo de Chocolate",
    price: 5.0,
    image: bolo
  }
];

export default function Main() {
  const [carrinho, setCarrinho] = useState(0);
  const [data, setData] = useState(items);

  return (
    <>
      <div className="main-container">
        <Link to="/checkout" className="carrinho">
          <FiShoppingCart size={30} color="#fff" />
        </Link>

        <Select
          className="select"
          placeholder="Selecione a categoria do produto"
          onChange={({ value }) => {
            const { id } = options.find((obj) => obj.value === value);

            setData(items.filter((obj) => obj.idCategory === id));
          }}
          options={options}
        />

        <div className="content">
          <div className="products-list">
            {data.map((item) => (
              <div key={item.id} className="list">
                <img className="drinks" src={item.image} alt="drinks" />

                <p>{item.name}</p>

                <h1>R${item.price}</h1>

                <button
                  onClick={() => setCarrinho(carrinho + 1)}
                  className="button"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="counter">{carrinho}</h1>
    </>
  );
}
