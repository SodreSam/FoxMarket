import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FiShoppingCart, FiMinusCircle, FiPlusCircle } from "react-icons/fi";

import { Link } from "react-router-dom";

import coca from "../../assets/coca.png";
import fanta from "../../assets/fanta.png";
import bolo from "../../assets/bolo.png";
import kitkat from "../../assets/kitkat.png";
import doritos from "../../assets/doritos.png";
import ruffles from "../../assets/ruffles.png";
import agua from "../../assets/agua.png";
import aguagas from "../../assets/aguagas.png";

import './styles.css';

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
    price: 3.0,
    image: fanta
  },
  {
    id: 1,
    idCategory: 0,
    name: "Coca Cola Lata",
    description: "Coca Cola Lata 350ml",
    price: 3.5,
    image: coca
  },
  {
    id: 2,
    idCategory: 0,
    name: "Água Mineral Sem Gás",
    description: "Água Mineral Sem Gás 500ml",
    price: 2.5,
    image: agua
  },
  {
    id: 3,
    idCategory: 0,
    name: "Água Mineral com Gás",
    description: "Água Mineral com Gás 500ml",
    price: 2.5,
    image: aguagas
  },
  {
    id: 4,
    idCategory: 1,
    name: "Bolo de Chocolate",
    description: "Bolo de Chocolate",
    price: 5.0,
    image: bolo
  },
  {
    id: 5,
    idCategory: 1,
    name: "KitKat",
    description: "KitKat",
    price: 4.0,
    image: kitkat
  },
  {
    id: 6,
    idCategory: 2,
    name: "Doritos",
    description: "Doritos",
    price: 5.5,
    image: doritos
  },
  {
    id: 7,
    idCategory: 2,
    name: "Ruffles",
    description: "Ruffles",
    price: 6.0,
    image: ruffles
  }
];

export default function HomepageMain() {
    const [data, setData] = useState(items);

  const itemClicked = (item) => {
    const products = JSON.parse(localStorage.getItem("Products")) || [];

    const isAlreadyPresent = products.some((product) => product.id === item.id);
    const newProducts = isAlreadyPresent
      ? products.map((product) =>
          product.id === item.id
            ? { ...product, count: product.count + 1 }
            : product
        )
      : products.concat(item);

    localStorage.setItem("Products", JSON.stringify(newProducts));
  };

  return (
    <form>
			
			
			<ul className='item-list'>
				<div className="scroll">

					{data.map((item) => (
						<div key={item.id} className='item'>
							<item-component>
								<h4 className="itemm"><img src={item.image} alt="agua" />{item.name}</h4>
								<span className='price'>R$ {item.price}</span>
                                <button>Adicionar ao Carrinho</button>	
							</item-component>
						</div>
					))}
						<br/>
                        
			</div>

			<br/>
			<hr/>
			</ul>
			
			
		</form>

  );
}
