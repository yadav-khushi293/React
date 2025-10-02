import axios from "axios";
import { useEffect,useState } from "react";

const getData = async (url)=>{

    try {
        let res = await axios.get(url);
        return res.data;
    }catch(error){
       console.log(error)
    }
}

export const ListTodo =()=>{

    const [apiData,setApiData]=useState(null);
    const[isloading,setIsloading]=useState(true);
    const [isError,setisError]=useState(false);

    const api=`https://api-database-1.onrender.com/ToDo`;

    const handlEdit = async (id)=>{

        try{
            let updateEdit ={
                isEdit:true
            }
            let res = await axios.patch(`${api}/${id}`,updateEdit)
            console.log("Res:",res)
        }catch(error){
            console.log(error)
        }

        const handleDel=async(id)=>{
            await axios.delete(`${api}/${id}`)
        }

        useEffect
        (()=>{
            const fetchData = async()=>{
                try{
                    let res1=await getData(api);
                    setApiData(res1);
                }catch(error){
                    console.log(error);
                    setisError(true)
                }
                finally{
                    setIsloading(false)
                }
            }
            fetchData();
        },[]);

        if(isloading)return<h1>Loading</h1>
        if(isError)return<h1>404 error</h1>
    

    return(
        <>

        <h1>List Todo</h1>
        {
            apiData?.map((el)=>(

                <div  className="todoListTask" key={el.id}>

                    <input type="checkbox"/>
                    <h1>{el.todo}</h1>
                    <button onClick={()=>  handlEdit(el.id)} className="btn-edit">edit </button>
                     <button onClick={()=>  handleDel(el.id)} className="btn-del">Delete </button>
        
                </div>

            ))
        }
        </>
    )
    }
}