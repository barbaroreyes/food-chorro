import React , {useState,useEffect} from'react';
import { DataStore } from '@aws-amplify/datastore';
import { Oferta } from '../models'
const Ofertas = (props) => {
    const [plates,setPlates] = useState([])
    useEffect(async()=>{
      const response = await DataStore.query(Oferta)
      console.log(response)
      setPlates(response)
    },[])
  return (
    <div className='ofertas bg-black '>
      {plates.map((plate,i)=>{
       return (
         <div key={i} className='plato grow db shadow-5'>
           <h1>{plate.name}</h1>
           <img className='image' src={plate.image} alt={plate.name}/>
           <p>{plate.description}</p>
            <span>${plate.price}.00</span>
        </div>
       )
     })}
    </div>
  );
}

export default Ofertas;
