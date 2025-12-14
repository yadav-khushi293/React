import axios from "axios";
import React, {useEffect ,useState} from "react";
import {Link , useSearchParams } from "react-router";

const getData=(url)=>{
   return axios
   .get(url,{
        headers:{
            'x-api-key':'reqres_8fc681ec97a7438c947dc90c0eca5116',
        },
    })
    .then((res)=>res).catch((err)=>err)
};
const setpageFormula =(val)=>{
    console.log(val);

    val = Number(val);
    if(typeof val === 'number' && val>= 1) val=1;
    if(!val) val=1;
    return val;
}
export const Apicall_different=()=>{

    const [value , setvalue] = useState(null);
    console.log(value);

    const [pagination ,setpagination]=useState(null);
    console.log(pagination);
    const [searchParam ,setsearchParam]=useSearchParams();

    const initialpage = setpageFormula(searchParam.get('page'));
    const [page , setpage] =useState(initialpage);

    const api='https://reqres.in/api/users?page=${page}&per_page=5';
    useEffect(()=>{
        getData(api).then((res)=>{
            setvalue(res.data.data);
            setpagination(res.data)
        })
        .catch((err)=>console.log(err));

    },[page]);

    useEffect(()=>{
        setsearchParam({page});
    },[page])

    return(
        <>
        <div style={{
            display:'flex',
            gap:10,
            flexWrap:'wrap',
            justifyContent:'center'
        }}>
           
           {
            value && value.map((el)=>{
                return(
                    <link key={el.id}>
                        <p>{el.id}</p>
                        <img src={el.avatar} />
                        <p>{el.first_name}</p>
                        <p>{el.last_name}</p>
                    </link>
                )
            })}
        </div>

        <div style={{display:'flex' ,justifyContent:'center', padding:10}}>

            <button disabled={page === 1? true : false} onClick={()=>setpage(page-1)}>-</button>
            <button  disabled ={page === pagination?.total_pages ? true :false} onClick={()=>setpage(page+1)}>+</button>

        </div>
        </>
    )
     
    
}