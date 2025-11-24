// import './App.css'
// import { useRef } from 'react'
// function App() {
  
//   const Inputuseref= useRef(null);

//   const handlebutton=()=>{
//        Inputuseref.current.styl.focus();
//   }
//   return (
//     <>
//       <input type='text' placeholder='Enter Your Data' ref={Inputuseref}></input>
//       <button onClick={handlebutton}>Focus</button>
//     </>
//   )
// }


// import './App.css'
// import { useEffect, useState } from 'react'

// function App() {

//   const [count, setcount] = useState(0);

//   useEffect(() => {
//     document.title = `count: ${count}`;
//   }, [count]);

//   return (
//     <>
//       <button onClick={() => setcount(count + 1)}>+</button>
//     </>
//   )
// }



import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
   
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Interval cleared");
    };
  }); 

  return (
    <>
      <h1>Timer: {count}</h1>
    </>
  );
}

export default App;

    