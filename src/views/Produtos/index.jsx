import React from 'react';

import Header from '../../components/Header';

import ProdutosContainer from '../../components/ProdutosContainer';

const Produtos = () => {
  return (
    <>
      <Header nome="Apolo" />
      <h1 className="titulo-pagina">Produtos</h1>
      <ProdutosContainer />
    </>
  );
}

export default Produtos;
