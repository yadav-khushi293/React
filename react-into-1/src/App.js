
import React from 'react';
import './App.css';

import { UseRef } from './UseRef';

function App(){
  let[count,setcount]=React.useState(0);

  const handleIncre = ()=>{
    setcount((prev)=>prev + 1)
  }

  const handleDecre=()=>{
    setcount((prev)=>prev -1)
  }
  return(
    <> 
    <h1 id='counter'> counter {count}</h1>
    <button disabled ={count ===10} onClick={handleIncre}>+</button>
       <button disabled ={count ===0} onClick={handleDecre}>-</button>
       <UseRef/>
    </>
  )
}

export default App;