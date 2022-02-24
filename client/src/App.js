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
    <div className="w-full max-w-lg font-['Inter']">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-3">
          <label className="block text-gray-500 text-lg" for="username">
            Username
          </label>
          <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
          <p className="text-gray-400 text-md">Instagram username, phone number or email address</p>
        </div>
        <div className="mb-5">
          <label className="block text-gray-500 text-lg" for="password">
            Password
          </label>
          <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
          <p className="text-gray-400 text-md">Use the password you use to sign into Instagram</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-[#22AFFF] hover:bg-[#198ED0] text-white text-lg font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" type="button">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
