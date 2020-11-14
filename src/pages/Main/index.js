import React from 'react';
import Select from 'react-select'

import './styles.css';

import coca from '../../assets/coca.png';
import fanta from '../../assets/fanta.png';
import bolo from '../../assets/bolo.png';

const options = [
    { id:0, value: 'Bebidas', label: 'Bebidas' },
    { value: 'Doces', label: 'Doces' },
    { value: 'Salgados', label: 'Salgados' }
]

const items = [
    {
        id: 0,
        idCategory: 0,
        name: "Coca-cola lata",
        description: "Coca-cola lata 350ml",
        price: 3.50,
        image: coca
    },
    {
        id: 0,
        idCategory: 0,
        name: "Fanta Uva Lata",
        description: "Fanta Uva lata 350ml",
        price: " R$3.50",
        image: fanta
    },
    {
        id: 0,
        idCategory: 0,
        name: "Bolo de Chocolate",
        description: "Bolo de Chocolate",
        price: 5.00,
        image: bolo
    },
    {
        id: 0,
        idCategory: 0,
        name: "Fanta Uva Lata",
        description: "Fanta Uva lata 350ml",
        price: 3.50,
        image: fanta
    }
]

export default function Main(){
    return(
        <>
        <div className="main-container">
                           <Select className="select" placeholder="Selecione a categoria do produto" options={options} />

            <div className="content">
                
                <div className="products-list">
                
                    { items.map(item => (
                        <div>
                            <img className="drinks" src={item.image} alt="coca"/>
                            {item.name}

                            {item.price}
                            <button className="button">Adicionar ao carrinho</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
        </>
    );
}