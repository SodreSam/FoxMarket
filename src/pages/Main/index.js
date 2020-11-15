import React, {useState} from 'react';
import Select from 'react-select'
import { FiShoppingCart } from 'react-icons/fi';

import { Link } from 'react-router-dom';

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
        name: "Fanta Uva Lata",
        description: "Fanta Uva lata 350ml",
        price: 3.50,
        image: fanta
    },
    {
        id: 0,
        idCategory: 0,
        name: "Fanta Uva Lata",
        description: "Fanta Uva lata 350ml",
        price: 3.50,
        image: coca
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
    },
    {
        id: 0,
        idCategory: 0,
        name: "Fanta Uva Lata",
        description: "Fanta Uva lata 350ml",
        price: 3.50,
        image: fanta
    },
    {
        id: 0,
        idCategory: 0,
        name: "Fanta Uva Lata",
        description: "Fanta Uva lata 350ml",
        price: 3.50,
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
    },
    {
        id: 0,
        idCategory: 0,
        name: "Bolo de Chocolate",
        description: "Bolo de Chocolate",
        price: 5.00,
        image: bolo
    },
]

export default function Main(){

    const [carrinho,setCarrinho] = useState(0);


    return(
        <>
        <div className="main-container">

                            <Link to="/checkout" className="carrinho">

                                <FiShoppingCart size={30} color="#fff"/>

                            </Link>

                           <Select className="select" placeholder="Selecione a categoria do produto" options={options} />

            <div className="content">
                
                <div className="products-list">
                
                    { items.map(item => (

                        <div className="list"> 

                            <img className="drinks" src={item.image} alt="drinks"/>

                            <p>{item.name}</p>
                                    
                            <h1>R${item.price}</h1> 

                            <button onClick={() => setCarrinho(carrinho+1)} className="button">Adicionar ao carrinho</button>
                            
                        </div>
                    ))}
                   
                </div>

            </div> 
            
        </div><h1 className="counter">{carrinho}</h1>
        </>
    );
}