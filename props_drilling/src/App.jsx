import React,{useState} from 'react';
import './App.css'

import {Child} from '../Component/child2'

// export function Parents(){
//   let count=100;

//   return(
//     <>
//     <h1>parents</h1>
//     <child count ={count}/>
//     </>
//   )
// }

// import { Child } from "../Component/Child";

// export function Parents(){
//   let[count,setCount]=React.useState(0)

//   const handleInc =()=>{
//     setCount((prev)=> prev + 1)
//   }
 
//   const handleDec = ()=>{
//     setCount((prev)=>prev - 1)
//   }

//   return(
//     <>
//     <h1>parents</h1>
//     <Child count={
//       {count,handleDec,handleInc}
//       }/>
//     </>
//   )
// }
/* PROPS*/ 

export function Parents() {
  const [number1, setNumber1] = useState(0);
   const [number2, setNumber2] = useState(0);
    const [Operator, setOperator] = useState(0);

    return(
      <>
      <h1>calculater parent</h1>

      <input type="text" onChange={(e)=>setNumber1(e.target.value)}></input>
        <input type="text" onChange={(e)=>setOperator(e.target.value)}></input>
          <input type="text" onChange={(e)=>setNumber2(e.target.value)}></input>
      < Child props ={{number1,Operator,number2}}/>
      </>
    )

}


