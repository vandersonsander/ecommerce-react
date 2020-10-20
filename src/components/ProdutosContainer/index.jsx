import React, {useState, useEffect} from 'react';
import CardProduto from '../CardProduto';
import axios from '../../services/api';
import './ProdutosContainer.css';

const ProdutosContainer = (props) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProdutos = async () => await axios.get(`products`);
    const listProdutos = getProdutos();
    listProdutos
      .then(res => setProdutos([...res.data]))
      .finally(setLoading(false));
  }, [props])

  return (
    <div className="produtos-container">
      {
      produtos.length === 0 || loading
      ?
      [1,2,3,4,5].map((e) =>  {
        return (
          <div className="produto-loading" key={e}>
            <div className="imagem-fake"></div>
            <div className="titulo-fake"></div>
            <div className="descricao-fake"></div>
            <div className="botao-fake"></div>
          </div>
        )
      })
      :
      produtos.map(prod => {
        const {id, title, description, price, image} = prod;
        return (<CardProduto
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
          image={image}
        />)
      }) 
      }
    </div>
  )
}

export default ProdutosContainer;