import { createContext ,useContext } from 'react';


const TodoContext = createContext(
    {
      todos:  [
            {
               id:1,
               todo: "massage ",
               completed: false
            }],
            addTodo: (todo)=>{},
            updateTodo: (id,todo)=>{},
            deleteTodo: (id)=>{},
            toggleCompleted: (id)=>{}

        
    }

) 
export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
