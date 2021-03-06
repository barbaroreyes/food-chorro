import React , {useState,useEffect} from'react';
import { DataStore } from '@aws-amplify/datastore';
import {Especiales} from '../models'
const Speciales = (props) => {
    const [plates,setPlates] = useState([])
    useEffect(async()=>{
      const response = await DataStore.query(Especiales)
      console.log(response)
      setPlates(response)
    },[])
  return (
    <div className='ofertas bg-black '>
      <h1 className='container1'>Todos X $9.99</h1>
      {plates.map((plate,i)=>{
       return (
         <div key={i} className='plato especiales grow db shadow-5'>
             <h1>{plate.Dia}</h1>
           <h1>{plate.name}</h1>
           <h1>{plate.Description}</h1>
            
        </div>
       )
     })}
     <div className='container'>
        <h1 className='anuncios'>1773 Pali Dr El Paso Tx</h1>
        <h1 className='anuncios'>(915)888 647520</h1>
        <h1 className='anuncios'>(915)888 647520</h1>
    </div>
    </div>
  );
}

export default Speciales;

