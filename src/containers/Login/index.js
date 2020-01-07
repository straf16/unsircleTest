import React, { useState } from 'react'
import {
  useHistory
} from 'react-router-dom'

import './login.css';

function Login (props) {
  let history = useHistory()

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let submitLogin = (e) => {
    e.preventDefault()
    if (email === 'test@unsircle.com' && password === 'test@unsircle.com') {
      // console.log('email', email)
      // console.log('password', password)
      // console.log(props.user)
      history.push({ pathname: "/dashboard", user: "masuk" });
    } else {
      console.log('salah')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div className="input-user">
        <div className="wrapper">
          <form onSubmit={submitLogin} className="form-signin">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" placeholder="Password" required="" />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login