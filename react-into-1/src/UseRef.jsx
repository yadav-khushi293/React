import React from "react";

export  const UseRef =()=>{
   
    const refData=React.useRef(null);
 
    const handleclick = ()=>{
        let value = refData.current.value;
        console.log(value);
    }

    return(
        <>
        <h1>useref Hooks</h1>
         <input type="text" ref={refData}/>
         <button onClick={handleclick }>click Me</button>
        </>
    )

}
