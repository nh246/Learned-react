import Peferences from "./components/Peferences"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      
      <TodoList/>
      <Peferences/>

    </div>
  )
}

export default App