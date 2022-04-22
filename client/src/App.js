import { useState, useEffect } from 'react'

// import { Menu } from '../components/Menu'
import {OrderNumber} from './components/OrderNumber'

function App() {
  // const [state, setState] = useState([])

  // useEffect(() => {
  //   getMenu()
  // }, [])

  // const getMenu = () => {
  //   fetch('http://localhost:8000/menu/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => setState(data))
  //   console.log(state)
  // }

  return (
    // <Menu items={state}/>
    <OrderNumber value={25}/>
  );
}

export default App;