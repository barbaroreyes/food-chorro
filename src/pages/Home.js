import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <main className='bg-black'>
        <div className='container1'>
        <h1 className='horario'>Horarios</h1>
        <h1 className='horario'>Martes A Sabado</h1>
        <h1 className='horario'>11 Am  a 6 Pm</h1>
          
        </div>
     <div className='container'>
    <div className='categoria'><h3><Link className='title' to='/ofertas'>Menu Regular</Link></h3>
    <img src='https://foodaplication4d68e0d5d42b4ddbb80c6b542241e9f313746-staging.s3.amazonaws.com/public/carne-frita+con+arrozy+tostones.jpeg'/>
    </div>
     <div className='categoria'><h3><Link className='title' to='/especiales'>Especiales</Link></h3>
     <img src='https://foodaplication4d68e0d5d42b4ddbb80c6b542241e9f313746-staging.s3.amazonaws.com/public/carne-frita+con+arrozy+tostones.jpeg'/>
     </div>
     <div className='categoria'><h3><Link className='title' to='/servicios'>Servicios</Link></h3>
      <img src='https://foodaplication4d68e0d5d42b4ddbb80c6b542241e9f313746-staging.s3.amazonaws.com/public/carne-frita+con+arrozy+tostones.jpeg'/>
     </div>
     <div className='categoria'><h3><Link className='title' to='/especiales'>Especiales</Link></h3>
     <img src='https://foodaplication4d68e0d5d42b4ddbb80c6b542241e9f313746-staging.s3.amazonaws.com/public/carne-frita+con+arrozy+tostones.jpeg'/>
     </div>
     <div className='categoria'><h3><Link className='title' to='/especiales'>Especiales</Link></h3>
     <img src='https://foodaplication4d68e0d5d42b4ddbb80c6b542241e9f313746-staging.s3.amazonaws.com/public/carne-frita+con+arrozy+tostones.jpeg'/>
     </div>
     </div>
      <div className='container1'>
        <h1 className='horario'>1773 Pali Dr El Paso Tx</h1>
        <h1 className='horario'>(915)888 647520</h1>
    </div>
    <div className='container'>
        <h1 className='anuncios'>1773 Pali Dr El Paso Tx</h1>
        <h1 className='anuncios'>(915)888 647520</h1>
        <h1 className='anuncios'>(915)888 647520</h1>
    </div>

     
    </main>
  )
}

export default Home
