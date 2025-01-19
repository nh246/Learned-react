import React from 'react'
import { Link, useNavigate } from 'react-router'

const App = () => {
  const navigate = useNavigate();
  return (
    <div className='space-x-5 p-5'>

      <button onClick={() => navigate("/login")} className='px-6 py-2 bg-blue-600 text-white font-semibold'>Login</button>
      

      <button onClick={() => navigate("/logout")} className='px-6 py-2 bg-blue-600 text-white font-semibold'>Logout</button>
    </div>
  )
}

export default App