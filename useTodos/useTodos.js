import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  //console.log(localStorage.getItem('todos'));
  return JSON.parse(localStorage.getItem('todos')) || []
}

export default function useTodos() {
  
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
  

    const onAddTodo = (todo) => {
      dispatchTodo({
        type: "addTodo",
        payload: todo
      });
    };
    
    const handleDeleteTodo = (id) => {
      dispatchTodo({
        type: "[TODO] Remove Todo",
        payload: id         
      })
    }
    
    const handleChangeState = (id) =>{
      dispatchTodo({
        type: "[TODO] Change State",
        payload: id,
      })
    }

    return {
      todos,
      onAddTodo,
      handleDeleteTodo,
      handleChangeState
    }
}
