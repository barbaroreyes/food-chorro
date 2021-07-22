import React ,{useState,useEffect} from 'react'
import Amplify from 'aws-amplify'
import confi from './aws-exports'
import { DataStore } from '@aws-amplify/datastore';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import Header from './components/Header'
import  Aunthentication from './components/Authentication'
import Home from './pages/Home'
import Platos from './pages/Ofertas'
import Especiales from './pages/Speciales'
import {Switch,Route} from 'react-router-dom'
import './App.css';

Amplify.configure(confi)
function App() {

  return (
    
    <div className="App">
      <Header/>
       
      <Switch>
     
     <Route exact path="/">
     <Aunthentication/>
    </Route>
     <Route exact path="/ofertas">
       <Platos ofertas/>
     </Route>
     <Route exact path="/especiales">
       <Especiales/>
     </Route>
     </Switch>
    </div>
  );
}

export default App;
