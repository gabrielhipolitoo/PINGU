import React, { useState } from 'react'
import UseRandomImgs from '../UseRandomImgs'
import Categoria from './Links/Categoria'


const filtros = ['livraria','cachorros','gatos','casa','festa','praia','mar','cachoeira','decoração']

const Section = () => {
    const {imagens,setSearch,search,setImagens,loading} = UseRandomImgs()
    const [value,setValue] = useState()

    function handleSeach(e){
      e.preventDefault()
      setImagens([])
      setSearch(value)
    }
    
      function handleClick(e){
      e.preventDefault()
      setImagens([])
      setSearch(e.target.innerText)
    }

  return (
    <section>
        <h1>Explore nosso banco de imagens</h1>
        <form onSubmit={handleSeach}>
            <input id='search' type="search" onChange={({target}) => setValue(target.value)} placeholder='Pesquise aqui...'/>
            <button type='submit'>Procurar</button>
        </form>
      <div className='filtros'>
          <span>Filtros:</span>
          {filtros.map((item) => <a href='' onClick={handleClick} value={item} key={item}>{item}</a>)}
    </div>
        <div className='imagens'>
          {loading && <p>Carregando</p>}
            {imagens.map((item,index) => (
              <div>
                <img src={item}/>
              </div>
            ))}
        </div>
       
    </section>
  )
}

export default Section