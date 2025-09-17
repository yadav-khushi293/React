import React from "react";

import {ListTodo} from './ListTodo'

export const AddTodo =()=>{

    const [data,setData] =React.useState([]);

    const [text, setText] =React.useState('')

    const handleFun = ()=>{

        if (text.trim==="")return
         let todo = {
            id:data.now(),
            text,
            isEdit:false,
            isCheck:false
         }

         setData([...data,todo]);
    }


    return(
        <>
         <h1>todo</h1>

         <input onChange={(el)=>setText(el.target.value)} type="text" placeholder="enter the todo"></input>
         <input onChange={handleFun} type="button" value="add todo"></input>
        <ListTodo props ={data}/>
        </>
    )
}
