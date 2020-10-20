import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { MdShoppingCart, MdStore, MdHome } from 'react-icons/md';
import Pesquisa from '../Pesquisa';

const Header = (props) => {
  return (
    <header className="header">
      <h2>Ecommerce do {props.nome}</h2>
      <ul className="menu-navegacao">
        <li><Link to="/"><MdHome />Home</Link></li>
        <li><Link to="/produtos"><MdStore />Produtos</Link></li>
        <li><Link to="/carrinho"><MdShoppingCart />Carrinho</Link></li>
      </ul>
      <Pesquisa />
    </header>
  );
}

export default Header;
