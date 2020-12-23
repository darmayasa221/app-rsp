import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
export const RouteApp = () => {
  return (
    <Router>
      <Route path="/home"component={Home}/>
      <Route path="/" exact component={Login}/>
    </Router>
  )
}
