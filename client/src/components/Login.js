import {useState} from 'react'
import '../index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return <div className="container" style={{maxWidth: 400, float: 'left'}}>
      <div className="form-group">
        <label className="" for="username">
          Username
        </label>
        <input 
          className={`form-control mb-2 is-invalid`} type="text" placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username} 
        />
      </div>
      <div className="form-group">
        <label className="" for="password">
          Password
        </label>
        <input 
          className="form-control is-invalid" id="password" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p className="invalid-feedback">{props.errorMessage}</p>
      </div>
      
      <button 
        onClick={() => props.buttonAction(username, password)}
        className="btn btn-primary">
          Log In
      </button>
  </div>
}