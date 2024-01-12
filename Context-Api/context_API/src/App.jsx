
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
<h1>This is simple context</h1>
    </UserContextProvider>
  )
}

export default App
