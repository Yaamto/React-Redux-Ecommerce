import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return(
  <nav className='nav-top'>
      <NavLink exact to="/">Accueil</NavLink>
      <NavLink to="/produits">Produits</NavLink>
      <NavLink to="/contact">Contact</NavLink>
  </nav>
  ) 
}
