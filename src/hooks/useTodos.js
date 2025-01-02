import { useReducer } from "react";
import { todosReducer } from "../todosReducer";

export function useTodos() {

  const [todos, dispatch] = useReducer(todosReducer, []);

  const handleForm = (todo) => {
    dispatch({ type: '[ADD_TODO]', payload: todo });
  }

  const handleRemoveTodo = (id) => {
    dispatch({ type: '[DELEVE_TODO]', payload: id });
  }


  return {
    todos, handleForm, handleRemoveTodo
  }
}