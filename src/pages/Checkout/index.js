import React from 'react';

import { FiArrowLeftCircle} from 'react-icons/fi';

import { Link } from 'react-router-dom';

import './styles.css';

import bag from '../../assets/bag.png';



export default function Checkout(){

    return(
        <div>
        <Link to="/" className="arrow-back">
            <FiArrowLeftCircle  size={35} color="#fff"/>
        </Link>
        <div className="checkout-container">
            <h1 className="end-title">Finalizar pedido</h1>
            <div className="checkout-content">
                 <img className="bag" src={bag}  alt="bag"/>
                 <h1>FoxMarket</h1>
                 
            </div>
            <button className="button">Finalizar Compra</button>
        </div>
        
        </div>
    );
}