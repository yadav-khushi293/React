import axios from "axios";

const api = 'https://fakestoreapi.com/products';

axios.get(api).then((res)=>{console.log('Res:',res)}).catch((err)=>{console.log("Error",err)});