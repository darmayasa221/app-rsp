import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Refactory1 from '../../asset/png/Refactory1.png'
import "./Navbar.css"


export const Navbar = () => {
  const [state, setState] = useState({slideDownL:true})
  const down = (data) =>{
    if(state.slideDownL){
      setState({slideDownL:false})
    }else{
      setState({slideDownL:true})
    }
  }
  const slide = state.slideDownL? "" : "down"
  return (
    <Router>
        <nav className="nav">
          <div className="logo">
            <img src={Refactory1} alt="logo"/>
          </div>
          <ul className={slide} >
            <Link className="a" to=''><li>Home</li></Link>
            <Link className="a" to=''><li>Courses</li></Link>
            <Link className="a" to=''><li>Costom Trainings</li></Link>
            <Link className="a" to=''><li>Case Studies</li></Link>
            <Link className="a" to=''><li>Blog</li></Link>
          </ul>
          <div className="menu-toggle" onClick={down}>
            <span></span> 
            <span></span>
            <span></span>
          </div>
        </nav>
    </Router>
  )
}
