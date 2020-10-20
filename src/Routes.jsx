import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import Carrinho from './views/Carrinho';
import Produtos from './views/Produtos';
import Produto from './views/Produto';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/carrinho" component={Carrinho}/>
      <Route path="/produtos" component={Produtos}/>
      <Route path="/produtos/:pesquisa" component={Produtos}/>
      <Route path="/produto/:id" component={Produto}/>
    </BrowserRouter>
  );
}

export default Routes;