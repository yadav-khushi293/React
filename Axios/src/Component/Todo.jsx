import { useRef } from "react";
import {nanoid} from "nanoid";
import axios from "axios";

export const Todos= ()=>{

    let api = `https://api-database-1.onrender.com/Todo`

    const dataRef =useRef(null);

    const handleclick = async ()=>{
        const values = dataRef.current.value;

        let objectData = {
            id:nanoid(),
            todo:values,
            isEdit:false,
            isCompleted:false
        }

        try{

            let res = await axios.post(api,objectData)
            console.log(res);

        }catch(error){
            console.log(error)
        }
         
    }

    return(
        <>
        <h1>Todo</h1>
        <input type="text" placeholder="add todo"></input>
        <input type="button" value='add todo'  onClick={handleclick}/>

        </>
    )

};