import React from 'react'
import Categoria from './Links/Categoria'


const Header = () => {

    const links = ["Categoria","Blog","Suporte","Doações","Enviar imagem"]
    const [modal,setModal] = React.useState(false)
    function handleClick({target}){
       modal ? setModal(false) : setModal(true)
    }

     const Input = () => {
        return <a className='add'>modal aberto</a>
      }

  return (
    <header>
        <div className='logo'>
            <p>PINGU</p>
        </div> 
        <div className='links' >
          {links.map((item,index) => <a key={index} id={index} value={item} onClick={handleClick}  href={'#'+item}>{item}</a>)}
          {modal && <Categoria/>}
        </div>
        <div className='sing-in'>Login</div>
    </header>
  )
}

export default Header