import React from 'react';
import propType from 'prop-type';

export const CustomForm =({ fields, onsubmit,buttonText})=>{

    const [formData,setFormData]=React.useState(()=>{
        return fields.reduce((accumulater,fields)=>{
          
            accumulater[fields.name]='';
            return accumulater;
        },{})
    });

    console.log('formData',formData);
    console.log('fields:',fields);
    
    const handleChange =(e)=>{
        console.log('e',e);

        const {name , value}=e.target;
        setFormData((prev)=>({
           
            ...prev,
            [name]:value,
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        onsubmit(formData);//pass from data to the parents

    }

    return(
        <>
         <form id="from" onsubmit={handleSubmit}>
            {fields && fields.map((el,i)=>(

                <div key={i}>

                <label htmlFor={el.name}>{el.label}</label><br></br>

                <input type={el.type} id={el.name} name={el.name} placeholder={el.placeholder} value={formData[el.name]} onChange={(e)=>handleChange(e)} required={el.required}/> <br></br>
                
                </div>
            ))}

            <button type="sumit">{buttonText}</button>

         </form>
        </>
    )
}

CustomForm.prototype={
    fields:propType.arrayof(
        propType.shape({
            name:propType.string.isRequired,
            type:propType.string.isRequired,
            placeholder:propType.string.string,
            label:propType.string.isRequired,
            required:propType.bool,

        })
    ).isRequired,
    onsubmit:propType.fun.isRequired,
    buttonText:propType.string.isRequired,
}