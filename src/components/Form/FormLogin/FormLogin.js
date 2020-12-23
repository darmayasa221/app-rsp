import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";
import Refectory1 from '../../../asset/png/Refactory1.png'


const Toast =  Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const FormLogin = () => {
  const [user,] = useState({
    username:'admin',
    password:'admin'
  })
  const {register, handleSubmit} = useForm()  
  const sccs = useHistory()
  const submitLogin = (data) =>{
    if(data.username ===''){
      Toast.fire({
        icon:'error',
        title:'Username Kosong!'
      })
    }else if(data.password ===''){
      Toast.fire({
        icon:'error',
        title:'Password Kosong!'
      })      
    }else if(user.password !== data.password){
      Toast.fire({
        icon:'error',
        title:'Password Salah!'
      })
    }else if(user.username !== data.username){
      Toast.fire({
        icon:'error',
        title:'Username Salah'
      })
    }else{
      Swal.fire({
        icon:'success',
        title:'Login Success',
        showConfirmButton:false,
        timer:1000
      })
      setTimeout(() => {
        sccs.push('/home')
      }, 1000);
    }
  }

 
  return (
    <div className="base-container"> 
      <div className="header">Login</div>
      <div className="conten">
        <div className="image">
          <img src={Refectory1} alt="img"/>
        </div>
        <form onSubmit={handleSubmit(submitLogin)}>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
            title="username"
            type="text" 
            name="username" 
            placeholder="username"
            ref={register}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            title="password"
            autoComplete="password" 
            type="password" 
            name="password" 
            placeholder="password"
            ref={register}/>
          </div>
        </div>
        <div className="footer">
          <button title="sub" className="button" type="submit">
            Login
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}
