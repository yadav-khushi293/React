import { useContext } from "react";
import { createContexts } from "../Context/Context_Provider";

export const Dummy = () =>{

    const {count} = useContext(createContexts);

    return(
        <>
        <h1>Dummy{count}</h1>
        </>
    )
}