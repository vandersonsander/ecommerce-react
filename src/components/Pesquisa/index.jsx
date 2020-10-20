import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';


const Pesquisa = () => {
  const [pesquisa, setPesquisa] = useState("");
  function pesquisar() {
    console.log(pesquisa);
  }
  return (
    <div className="pesquisa">
      <input
        type="text"
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
        placeholder='Digite aqui o que você está procurando'
      />
      <button onClick={pesquisar}><MdSearch /></button>
    </div>
  );
}

export default Pesquisa;