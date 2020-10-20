import React from 'react';
import Header from '../../components/Header';
import ProdutosContainer from '../../components/ProdutosContainer';

const Home = () => {
  return (
    <>
      <Header nome="Apolo" />
      <h1 className="titulo-pagina">Bem vindo</h1>
      <ProdutosContainer />
    </>
  );
}

export default Home;
