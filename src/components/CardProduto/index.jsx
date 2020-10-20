import React from 'react';
import { Link } from 'react-router-dom';
import './CardProduto.css';
import { MdShoppingBasket, MdAddShoppingCart } from 'react-icons/md';

const CardProduto = (props) => {
  return(
    <div className="card-produto">
      <div className="imagem-container">
        <img src={props.image} alt=""/>
      </div>
      <h3 className="titulo-produto" title={props.title}>{props.title}</h3>
      <p className="description" title={props.description}>
        {props.description}
      </p>
      <p className="preco">{`R$ ${props.price.toFixed(2)}`}</p>
      <div className="botoes-container">
        <Link to={`/produto/${props.id}`} className="comprar">
          <MdShoppingBasket />Comprar</Link>
        <Link to="/carrinho" className="carrinho">
          <MdAddShoppingCart />Adicionar</Link>
      </div>
    </div>
  );
}

export default CardProduto;