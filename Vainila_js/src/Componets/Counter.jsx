import React from "react";

import {myStore} from '../Store/Store';

export const Counter =()=>{
    
    const storeValue =myStore.getState();

    return(
        <>
        <h1>Counter{storeValue.count}</h1>
        {
            // <button onClick={()=>setCount((prev)=>prev+1)}>increment</button>
            // <button onClick={()=>setCount((prev)=>prev-1)}>decriment</button>
        }
        </>
    )
}