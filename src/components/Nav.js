import React from 'react'
import {Link}from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='navigation'>
      <Link to='/'>Home</Link>
      <Link to='/ofertas'>Ofertas</Link>
      <Link to='/'>Home</Link>
      <Link to='/'>Home</Link>
      <Link to='/'>Home</Link>
    </nav>
  )
}

export default Nav
