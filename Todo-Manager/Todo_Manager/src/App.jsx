

import './App.css'
import Header from './components/Header/Header'
import { TodoProvider } from './../../../To-do-App/To_do_app/src/context/TodoContext';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])

  // adding todos

  const addTodo =(todo) =>{
      setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  // deleting todo 

  const deleteTodo =(id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id != id))
  }

  // updating todo 

  const updateTodo =(id,todo)=>{
    setTodos((prev)=prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
  }

  // Toggle complete 

  const toggleCompleted =(id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  }

  return ( 
<TodoProvider>
<Header/>

</TodoProvider>
  )
}

export default App
