import {useState} from 'react'
import '../index.css';

import { Button } from '../components/Button'

export const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return <div className="font-['Inter'] w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username} 
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={() => props.buttonAction(username, password)} style="primary">Log In</Button>
      </div>
    </form>
  </div>
}