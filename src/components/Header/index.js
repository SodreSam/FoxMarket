import React from 'react';

import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

export default function Header(props){
    
    return(
            <div className="header-container">
                <div className="content">
                    <a href="/"> <img src={logo} alt="logo"/></a>
                </div>
            </div>
    );
}