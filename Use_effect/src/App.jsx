import React from 'react'
import './App.css'

export const App=()=>{

  const [count,setCount] =React.useState(0);
  const [count2,setCount2] = React.useState(10);

  React.useEffect(()=>{
    console.log("Count:always run",count);
  });

  React.useEffect(()=>{
    console.log("count:have empty run",count);
  } ,[]);

  React.useEffect(()=>{
    console.log("count:have same dependency",count2);
  },[count2]);


  return(
    <>

    <h1>Count_1{count}</h1>
    <h1>Count_2 {count2}</h1>

    <button onClick={()=>setCount((prev)=>prev-1)}>-</button>
      <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
      <button onClick={()=>setCount2((prev)=>prev-1)}>count2 decrement</button>
          <button onClick={()=>setCount2((prev)=>prev+1)}>count2 increment</button>
    </>
  )
}


