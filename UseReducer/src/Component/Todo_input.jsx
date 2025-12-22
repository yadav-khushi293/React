import React from 'react';

import { reducer } from '../ReducerHook/Reducer';
import { initialValue } from '../ReducerHook/Store';
import { ADD_TODO_ITEMS } from '../ReducerHook/Action';
import { Todo_list } from './Todo-list';

export const TodoInput = () => {
  const todoText = React.useRef(null);
  const [state, dispatch] = React.useReducer(reducer, initialValue);
  console.log(" state:", state);

  const handleAddTodo = () => {
    const value = todoText.current.value;
    dispatch({ type: ADD_TODO_ITEMS, payload: value });
  };

  return (
    <>
      <input
        ref={todoText}
        type="text"
        placeholder="enter your task!!!"
      />
      <button onClick={handleAddTodo}>add task</button>
      <Todo_list  value={{ state, dispatch }} />
    </>
  );
};
