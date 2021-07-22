import React from 'react'
import {Link}from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='navigation'>
      <Link to='/'>Home</Link>
      <Link to='/ofertas'>Ofertas</Link>
      <Link to='/especiales'>Especiales</Link>
      <Link to='/bevidas'>Bevidas</Link>
    </nav>
  )
}

export default Nav
