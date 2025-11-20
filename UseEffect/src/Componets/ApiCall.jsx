import axios from 'axios'
import React, { useEffect } from 'react'
import  '../App.css'
export const Api_Call=()=>{

const [data,setData]=React.useState([]);
        
    const API="https://jsonplaceholder.typicode.com/todos"

    const getApi=()=>{
        axios.get(API)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
        .finally(()=>console.log('done'))
    }
    
    console.log(data)
    useEffect(()=>{
        getApi();
    },[]);

    return(
        <>
        <h1>hello Api</h1>
         <div  className='parents' >
        {
            data.map((el)=>(
                
               
                <div key={el.id}  className='childe' >
                <h2>id:{el.id}</h2>
                 <h1>Title:{el.title}</h1>
                {el.completed ?(
                     <h3>Completed:true</h3>
                ):(
                  <h3>Completed:flase</h3>
                )}
                
            
                </div>
            ))
            
         }
           </div>
       
        </>
    )
}