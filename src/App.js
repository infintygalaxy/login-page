import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Login from './container/Login'
import Register from './container/RegisterPage'
import WelcomePage from './container/WelcomePage'

const App = () => {
  return <Router>
    <Switch>
      <Route exact path={"/"}><Login/></Route>
      <Route exact path={"/register"}><Register/></Route>
      <Route exact path={"/welcome"}><WelcomePage/></Route>
    </Switch>
  </Router>
}

export default App
