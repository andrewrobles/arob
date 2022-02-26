import '../index.css';

export const Login = () => {
    return <div className="w-full max-w-md font-['Inter']">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-3">
        <label className="block text-gray-700 text-md" for="username">
          Username
        </label>
        <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
        <p className="text-gray-400 text-sm">Instagram username, phone number or email address</p>
      </div>
      <div className="mb-5">
        <label className="block text-gray-700 text-md" for="password">
          Password
        </label>
        <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
        <p className="text-gray-400 text-sm">Use the password you use to sign into Instagram</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-[#22AFFF] hover:bg-[#198ED0] text-white text-md font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" type="button">
          Log In
        </button>
      </div>
    </form>
  </div>
}