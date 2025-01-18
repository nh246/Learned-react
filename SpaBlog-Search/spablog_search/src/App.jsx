import { Outlet } from "react-router"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <main className="flex h-screen items-center justify-center">
      <Outlet/>
    </main>
    </>
  )
}

export default App