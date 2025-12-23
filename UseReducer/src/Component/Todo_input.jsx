import React from 'react';

import { reducer } from '../ReducerHook/Reducer';
import { initialValue } from '../ReducerHook/Store';
import { ADD_TODO_ITEMS, ERROR_TODO_ITEMS } from '../ReducerHook/Action';
import { Todo_list } from './Todo-list';

export const TodoInput = () => {
  const todoText = React.useRef(null);
  const [state, dispatch] = React.useReducer(reducer, initialValue);
  console.log(" state:", state);

  const handleAddTodo = () => {
    const value = todoText.current.value;
    if(value===""){
      dispatch({type:ERROR_TODO_ITEMS});
      return;
    }
    dispatch({ type: ADD_TODO_ITEMS, payload: value });

    setTimeout(()=>{
      dispatch({type:ADD_TODO_ITEMS,payload:value})
    },1000)
    todoText.current.value='';
  };

  return (
    <>
      <input ref={todoText} type="text" placeholder="enter your task!!!"/>
      <button onClick={handleAddTodo}>add task</button>

      {state.isError?(<h1>Somthing went wrong...</h1>):(
        <Todo_list  value={{ state, dispatch }} />
      )}
      
    </>
  );
};
