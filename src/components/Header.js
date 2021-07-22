import React from 'react';
import Nav from './Nav'
import Logo from '../components/Logo'
const Header = () => {
  return (
    <header className='header'>
         <Logo/>
         <h1 className='name'>El Chinchorro De Frida</h1>
           <h1 className='propaganda'>Exelencia y Sabor</h1>
         <Nav/>
     
       
    </header>
  )
}

export default Header
