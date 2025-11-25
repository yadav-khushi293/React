import React from "react";

export const Card = ({

    name = 'Not Provide',
    age = 'not give',
    email = 'not give',
})=>{

    return(
        <>
         <div  style={{
            display:'flex',
            justifyContent:'center',
            border:'1px solid black',
            flexDirection:'column',
            height:'200px',
            maxWidth:'300px'
         }}>
        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
        <h1>email:{email}</h1>
     </div>
        </>
    )
}