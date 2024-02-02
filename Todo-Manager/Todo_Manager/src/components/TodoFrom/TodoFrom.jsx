import { useState } from "react"
import { useTodo } from "../../../../../To-do-App/To_do_app/src/context/TodoContext"





function TodoFrom() {

  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()

  // adding todo 
  
  const add = (e)=>{
    e.preventDefault()
    if(!todo) return
    addTodo({todo, completed: false})
    setTodo("")
  }
  return (
    <form onSubmit={add}>
      <input type="text"
      placeholder="write todo....."
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button type="submit ">Add</button>
    </form>
  )
}

export default TodoFrom