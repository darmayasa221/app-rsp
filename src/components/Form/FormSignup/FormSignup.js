import React from 'react'
import Refectory1 from '../../../asset/png/Refactory1.png'
export const FormSignup = () => {
  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={Refectory1} alt="img"/>
        </div>
        <form>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input autoComplete="email" type="email" name="email" placeholder="email@gmail.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input autoComplete="password" type="password" name="password" placeholder="password"/>
          </div>
        </div>
        <div className="footer">
          <button className="button" type="submit">
            Register
          </button>
        </div>
        </form>
      </div>
    </div>      
  )
}
