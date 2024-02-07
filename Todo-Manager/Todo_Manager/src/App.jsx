

import './App.css'
import Header from './components/Header/Header'
import { TodoProvider } from './context';
import { useState } from 'react';
import { useEffect } from 'react';
import TodoFrom from './components/TodoFrom/TodoFrom';

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

  // local storage getting data  

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log(todos)
    if (todos && todos.length > 0) {
      setTodos(todos)
      console.log(todos)
    }
  },[])
 // local storage adding data 
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return ( 
<TodoProvider>
<Header/>
<div>
  <h1>Manage todo items</h1>

<TodoFrom/>
 
</div>

</TodoProvider>
  )
}

export default App
