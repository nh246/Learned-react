import { createContext , useContext} from 'react';

export const TodoContext = createContext({
//   this array holds all todos 
    todos : [{
        id: 1,
        todo : "massage",
        completed: false,
    }],

    // Methods for todo featuers 
    addTodo: (todo) =>{},
    updateTodo : (id , todo) =>{},
    deleteTodo : (id) => {},
    toggleComplete:(id)=> {}

    
    
})
// custom hook to provide usetodo 
export const useTodo = ()=>{

    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider