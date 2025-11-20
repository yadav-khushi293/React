// import { useEffect,useState } from 'react'
import {Api_Call} from './Componets/ApiCall'
import './App.css'

 function App() {
  // const[count,setCount] =useState(0);
  // const[count1,setCount1]=useState(0);

  // useEffect(()=>{
  //   console.log("hello with dept");
  // })
  
  // useEffect(()=>{
  //   console.log("hello with empty dept");
  // },[])

  
  // useEffect(()=>{
  //   console.log("hello with dept");
  // },[count])

  return (
    <>

    {/* <h2>count={count}</h2>
     <h2>count={count1}</h2>

     <button onClick={()=>setCount((prev)=>prev-1)}>-</button>
      <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
       <button onClick={()=>setCount1((prev)=>prev+1)}>count1</button> */}

       <Api_Call/>
    </>
  )
}

export default App
