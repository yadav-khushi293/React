import { useRef } from 'react'
import './App.css'

function App() {
 
  const defaultData=useRef(null);

  const handleInput=()=>{

    const textVal =defaultData.current.value;
        console.log("textVal",textVal);
        
  }

    console.log("my app render");
  
  return (
    <>
      <input ref={defaultData} type='text' placeholder='Enter some data...'></input>
      <button onClick={handleInput}>Click</button>
    </>
  )
}

export default App
