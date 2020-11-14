import React from 'react';

import './styles.css';

import logo from '../../assets/logo.png';

export default function Header(props){
    
    return(
            <div className="header-container">
                <div className="content">
                    <header>
                    <a href="/"> <img src={logo} alt="logo"/></a>
                    </header>
                </div>
            </div>
    );
}