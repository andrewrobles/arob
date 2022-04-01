import { useState, useEffect } from 'react'

import { Menu } from './components/Menu'

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    getMenu()
  }, [])

  const getMenu = () => {
    fetch('https://andrewrobles.pythonanywhere.com/menu/', {
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