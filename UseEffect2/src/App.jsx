import axios from 'axios';
import React from 'react'
import './App.css'

function App() {

  const [Data, setData] = React.useState([]);
  const [showData, setShowData] = React.useState(false); 

  const API="https://fakestoreapi.com/products";

  const getApi=()=>{
        axios.get(API)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
        .finally(()=>console.log('done'))
    }   

  return (
    <>
      {/* <h1>fakestore website</h1> */}

      {/* <button onClick={() => { getApi(); setShowData((!showData)); }}>
        Show Products
      </button> */}
       <button onClick={() => { getApi(); setShowData((true)); }}>
        Show Products
      </button>

      {showData && (
        <div className='parenst'>
          {
            Data.map((el)=>(
              <div className='Child' key={el.id}>
                <img src={el.image} className='img_1'></img>
                <h2>ID:{el.id}</h2>
                <h3>Title:{el.title}</h3>
                <h4>Description:{el.description}</h4>
              </div>
            ))
          }
        </div>
      )}
    </>
  )
}

export default App
