import React from 'react';

import { FiArrowLeftCircle } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import './styles.css';


export default function Checkout(){
    return(
        <div>
        <Link to="/" className="arrow-back">
            <FiArrowLeftCircle  size={35} color="#fff"/>
        </Link>
        <h1>Carrinho de compras</h1>
        </div>
    );
}