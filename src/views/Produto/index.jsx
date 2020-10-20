import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import axios from '../../services/api';

import { MdAddShoppingCart, MdShoppingBasket } from 'react-icons/md';

import './Produto.css';

const Produto = (props) => {
  const [produto, setProduto] = useState({})

  useEffect(() => {
    const { id } = props.match.params;
    const getProduto = async () => await axios.get(`products/${id}`);
    const produto = getProduto();
    produto
      .then(res => res.data)
      .then(res => setProduto({...res}))
  }, [props.match.params, props.match.params.id])

  return (
    <>
      <Header nome="Apolo"/>
      {
        !produto.id
        ?
        <div className="container-produto">
          <div className="imagem-fake"></div>
          <div className="informacoes">
            <div className="titulo-fake"></div>
            <div className="preco-fake"></div>
            <div className="descricao-fake"></div>
            <div className="botoes-fake">
              <div className="botao-fake"></div>
              <div className="botao-fake"></div>
            </div>
          </div>
        </div>
        :
        <div className="container-produto">
          <div className="imagem-produto">
            <img src={produto.image} alt=""/>
          </div>
          <div className="informacoes">
            <h1 className="titulo-produto" title={produto.title}>
              {produto.title}
            </h1>
            <p className="preco-produto">
              {`R$ ${produto.price.toFixed(2)}`}</p>
            <p className="descricao-produto" title={produto.description}>
              {produto.description}</p>
            <div className="botoes">
              <Link to="/carrinho" className="comprar">
                <MdShoppingBasket />Comprar
              </Link>
              <Link to="/carrinho" className="adicionar">
                <MdAddShoppingCart />Adicionar
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Produto;