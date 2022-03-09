import {useState, useEffect} from 'react'
import { Login } from './components/Login.js'
 
function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
  )

  const logoutButtonAction = () => {
    fetch('http://localhost:8000/api/logout/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    setLoggedIn(false)
  }

  const loginButtonAction = (username, password) => {
    fetch('http://localhost:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'username': username, 'password': password})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if ("token" in data) {
        setLoggedIn(true)
        localStorage.setItem('token', data.token)
      } 
    })
  }

  return (
    <div>
      {loggedIn
        ? <button className="btn btn-primary" onClick={logoutButtonAction}>Log Out</button>
        : <Login buttonAction={loginButtonAction}/>
      }
    </div>
  );
}

export default App;