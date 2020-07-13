
import React from 'react'
import landing from '../Landing/landing'
import adopt from '../Adopt/adopt'
import  { Route, Switch } from 'react-router-dom'


function Root() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route exact path="/adopt" component={adopt} />
      </Switch>
    </div>
  )
}

export default Root