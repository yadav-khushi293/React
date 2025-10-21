import React from "react";

export const Card = ({

    name = 'Not Provide',
    age = 'not give',
    email = 'not give',
})=>{

    return(
        <>

        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
        <h1>email:{email}</h1>
     
        </>
    )
}