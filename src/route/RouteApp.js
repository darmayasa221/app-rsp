import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
export const RouteApp = () => {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/home"component={Home}/>
    </Router>
  )
}
