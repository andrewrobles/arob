import {useState, useEffect} from 'react'

function App() {
  const [state, setState] = useState({
    message: '',
  })  

  useEffect(() => {
    getMessage()
  }, [])

  const getMessage = () => {
    fetch('http://localhost:8000/helloworld')
    .then(response => response.json())
    .then(data => saveMessage(data.message))
    .catch( err => {
        saveMessage('Connection error')
    })
  }

  const saveMessage = (message) => {
    setState({
      message: message,
    })
  }

  return (
    <span>
      <h1 className="text-3xl font-bold underline">
        {state.message}
      </h1>
    </span>
  );
}

export default App;
