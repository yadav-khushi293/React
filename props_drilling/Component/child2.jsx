import React, { useEffect, useState } from "react";
//PROPS

export const Child = ({props})=>{
    const [ans , setAns] = useState(0);

    let key = props.Operator;
    useEffect(()=>{
        switch(key){
            case "+":
                setAns(+props.number1 + + props.number2)
                break;
                
        }
    },[props.number1,props.number2,key])
  
    return(
        <>
        <h1>child Ans:{ans}</h1>
        </>
    )

}
