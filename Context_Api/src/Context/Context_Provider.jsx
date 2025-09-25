import { Children, createContext,useState } from "react";

export const createContexts = createContext(null);

export const Context_Provider = ({Children})=>{

    const [count,setCount] =useState(0);

    return(
        <createContexts.Provider value={{count,setCount}}>{Children}</createContexts.Provider>
    )
}