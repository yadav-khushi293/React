import React, { useRef } from "react";

import * as type from "../ReducerHook/Action"

export const Todo_list =({value={}})=>{

    const editValue = useRef(null);
    const {state,dispatch}=value;

    const handleclickDelete=(id)=>{
        dispatch({type:type.DELETES_TODO_ITEMS,payload:id});
    }

     const handleclickEdit=(id)=>{
        dispatch({type:type.EDITS_TODO_ITEMS,payload:id})
     }

     
    const handleclickCancel=(id)=>{
        dispatch({type:type.CANCEL_TODO_ITEMS,payload:id});
    }
     const handleclickConfirm=(id)=>{
        dispatch({type: type.CONFIRM_TODO_ITEMS, payload: id})

        const editText = editValue.current.value.trim();
        dispatch({
            type:type.EDITS_TODO_ITEMS,
            payload:{updatedText:editText,id:id}
        })
         }

    return(
        <>
        
       

         {
            state?.items?.map((el)=>{
                return(
                   <ul 
                   key={el.id}
                   style={{
                    display:'flax',
                    justifyContent:'space-around',
                    alignItems:'center',
                    listStyle:'none'
                   }}
                   >  
                   <input type="checkbox"/>
                   <li>{el.id}</li>
                   {el.isEdits ?(
                    <input ref={editValue} defaultChecked={el.text} type="text"/>
                   ):(
                    <li>{el.text}</li>
                   )}

                   <div style={{display:'flax',gap:'10px'}}>
                   {el.isEdits ?(
                    <>
                    <button style={{background:'green'}} onClick={()=>handleclickCancel(el.id)}>Cancel</button>
                     <button onClick={()=>handleclickConfirm(el.id)}>Confirm</button>
                    
                    </>
                   ):(
                    <>
                    <button onClick={()=>handleclickEdit(el.id)}>Edit</button>
                    <button style={{background:'red'}} onClick={()=>handleclickDelete(el.id)}>Delete</button>
                   
                    </>
                   )}
                   </div>
                   </ul>
                )
            })
         }
          </>
    )
    
}