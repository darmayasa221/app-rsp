import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Refactory1 from '../../asset/png/Refactory1.png'
import "./Navbar.css"


export const Navbar = () => {
  return (
    <Router>
        <nav className="nav">
          <div className="logo">
            <img src={Refactory1} alt="logo"/>
          </div>
          <ul>
            <li><Link to=''>Home</Link></li>
            <li><Link to=''>Courses</Link></li>
            <li><Link to=''>Costom Trainings</Link></li>
            <li><Link to=''>Case Studies</Link></li>
            <li><Link to=''>Blog</Link></li>
          </ul>
          <div className="menu-toggle">
            <span></span> 
            <span></span>
            <span></span>
          </div>
        </nav>
    </Router>
  )
}
