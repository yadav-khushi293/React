import React, { useEffect, useState } from "react";
import{useParams} from 'react-router-dom';
import axios from "axios" 

const  getData=(url)=>{
    return axios.get(url).then((res)=>res).catch((err)=>err);
};

export const SingleUserpage=()=>{

    const [data , setData]=useState({});

    console.log(data);
    const {productID}=useParams();
    const api =`https://fakestoreapi.com/${productID}`;

    useEffect(()=>{
        getData(api).then((res)=>setData(res.data)).catch((err)=>console.log(err));
    },[productID])
   
    return (
         <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
            {
            
                    <div key={data.id}>
                        <h1>{data.id}</h1>
                        <img src={data.image}/>
                        <p>{data.title}</p>
                        <h3>{data.price}</h3>
                        <h3>{data.description}</h3>
                        <h3>{data.category}</h3>
                    </div>

            }

        </div>
    )
}
