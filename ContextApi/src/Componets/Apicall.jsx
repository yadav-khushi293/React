import { useContext,useEffect } from "react";

import { contextCreated } from "../Context/ContextComponets";
import axios from './../../node_modules/axios/dist/esm/axios'
import { SingleUserpage } from "./Singlepage";

export const Apicall=()=>{

    const {data,setData}=useContext(contextCreated)

    const api_calling=async()=>{

    const API = 'https://fakestoreapi.com/products';
    

    let ans = await axios(API);
    let res = await ans;

    setData(res.data);
    }

    useEffect(()=>{
        api_calling();
    },[])

    return(
        <>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
            {data && data.map((el)=>{
                return(
                    <link to={`./Singlepage/${el.id}`} key={el.id}>
                        <h1>{el.id}</h1>
                        <img src={el.image}/>
                        <p>{el.title}</p>
                        <h3>{el.price}</h3>
                        <h3>{el.description}</h3>
                        <h3>{el.category}</h3>
                    </link>
                )
            })

            }

        </div>
        </>
    )
}