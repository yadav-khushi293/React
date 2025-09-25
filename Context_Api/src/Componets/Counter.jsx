import { useContext } from "react";
import { createContexts } from "../Context/Context_Provider";

export const Counter = ()=>{

    const {conut,setCount} = useContext(createContexts);

    return(
        <>
        <h1>conut{conut}</h1>
        <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
        <button onClick={()=>setCount((prev)=>prev-1)}>_</button>
        </>
    )
}