import React, { useEffect, useState } from "react";

import { FiArrowLeftCircle, FiCheck, FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import { Link } from "react-router-dom";

import CheckoutMain from '../../components/CheckoutMain';
import CheckoutList from '../../components/CheckoutList';


import "./styles.css";

import bag from "../../assets/bag.png";

export default function Checkout() {
  
  return (

  <CheckoutMain />
 // <CheckoutList /> 
  );
}
