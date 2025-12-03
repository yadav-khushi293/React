
export const Form =()=>{

    const fields=()=>[
        {
            name:'username', type:'text', placeholder:'Enter your username', label:'Username',required:true
        },
 
        {
        name:'password', type:'password',placeholder:'Enter your Password' ,label:'Password',required:true
        },
        
        {
       name:'confirmpassword', type:'password',placeholder:'Enter your confirmpasswor' ,label:'confirm passwor',required:true
        },
    
       {
      name:'Phone', type:'tel',placeholder:'Enter your number' ,label:'Phone',required:true
       },

    ];

    const handleFormSumit=(data)=>{

        console.log('handleFormSumit:', data)
    };


    return(
        <>
        <div>
            <h1>React form with Props Validation</h1>

            <CustomForm

            fields ={fields}
            onSumit={handleFormSumit}
            buttonText="Register"
            />
        </div>
        </>
    )
}