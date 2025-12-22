import React from "react";
import { TodoInput } from "../Component/Todo_input";
import { Todo_list } from "../Component/Todo-list";

export const Todo = ()=>{

    return(
        <>
        <TodoInput/>
        <Todo_list/>
        </>
    )
}