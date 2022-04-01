import { useState, useEffect } from 'react'

import { Menu } from './components/Menu'

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    getMenu()
  }, [])

  const sendOrder = (order) => {
    fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    }).then(response => response.json())
      .then(data => console.log(data))
  }

  const getMenu = () => {
    fetch('http://localhost:8000/menu/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setState(data))
    console.log(state)
  }

  return (
    <Menu items={state}/>
  );
}

export default App;