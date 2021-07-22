import React from 'react'
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import Home from '../pages/Home'
const Authentication = () => {
  return (
    <div>
      <AmplifySignOut/>
      <Home/>
    </div>
  )
}

export default withAuthenticator(Authentication)
