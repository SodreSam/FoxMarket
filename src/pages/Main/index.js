import React from 'react';
import Select from 'react-select'
import { FiShoppingCart } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import './styles.css';

const options = [
    { value: 'Bebidas', label: 'Bebidas' },
    { value: 'Doces', label: 'Doces' },
    { value: 'Salgados', label: 'Salgados' }
]
export default function Main(){
    return(
       
        <div className="main-container"> <div><FiShoppingCart color="#fff"/></div>
            <div className="content">

                <Select className="select" placeholder="Selecione a categoria do produto" options={options} />

            </div>
        </div>

    );
}