import React from 'react';

import './styles.css';

import logo from '../../assets/logo.png';

export default function Header(props){
    
    return(
           <header className="app-header">
               <picture className="logo">
                   <img src={logo} />
               </picture>
           </header>
    );
}