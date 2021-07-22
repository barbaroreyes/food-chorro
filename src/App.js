import React ,{useState,useEffect} from 'react'
import Amplify from 'aws-amplify'
import confi from './aws-exports'
import { DataStore } from '@aws-amplify/datastore';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import {}
import Platos from './pages/Ofertas'
import {Switch,Route} from 'react-router-dom'
import './App.css';

Amplify.configure(confi)
function App() {

  return (
    
    <div className="App">
      <Switch>
     {/* <AmplifySignOut/> */}
     
     <Route exact path="/ofertas">
       <Platos ofertas/>
     </Route>
     </Switch>
    </div>
  );
}

export default App;
