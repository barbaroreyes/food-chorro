import React ,{useState,useEffect} from 'react'
import Amplify from 'aws-amplify'
import confi from './aws-exports'
import { DataStore } from '@aws-amplify/datastore';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import { Oferta } from './models';
import './App.css';

Amplify.configure(confi)
function App() {
 const [plates,setPlates] = useState([])
 useEffect(async()=>{
   const response = await DataStore.query(Oferta)
   console.log(response)
   setPlates(response)
 },[])
  return (
    <div className="App">
     <AmplifySignOut/>
     {plates.map((plate,i)=>{
       return (
         <div key={i}>
           <h1>{plate.name}</h1>
           <img src={plate.image} alt={plate.name}/>
           <p>{plate.description}</p>
            <span>{plate.price}</span>
         </div>
       )
     })}
    </div>
  );
}

export default withAuthenticator(App);
