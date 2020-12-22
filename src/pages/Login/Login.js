import "./Login.css"
import React,{useState} from 'react'
import {FormLogin, FormSignup} from '../../container/Logins/Logins'
import { RightSide } from "../../components/Form/RightSide/RightSide"
const Login = () => {
  const [state,setState] = useState({
    isLoginActive: true
  })
  const changeState = () =>{
   if (state.isLoginActive){
     setState({isLoginActive:false})
   }else{
     setState({isLoginActive:true})
   }
  }
  const current = state.isLoginActive ? "Register" : "Login";
  return (
    <div className="App">
       <div className="login">
        <div className="container" >
          {state.isLoginActive && (
          <FormLogin/>
          )}
          {!state.isLoginActive && (
          <FormSignup/>
          )}
        </div>
        <RightSide 
        current={current}
        onClick={changeState}/>
      </div>
    </div>
  )
}
export default Login;
