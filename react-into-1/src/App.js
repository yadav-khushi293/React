import './App.css';

function App(){
  let count = null;
  
  const handleIncre=()=>{
     count += 1
    console.log(count);
  
  document.getElementById("counter").innerText=`counter ${count}`
  }

    const handleDecre = () => {
    count -= 1
    console.log(count);
    document.getElementById("counter").innerText=`counter ${count}`
  }
  return(
   <>
   <h1 id='counter'>Counter {count}</h1>
  <button onClick={handleIncre}>+</button>
    <button onClick={handleDecre}>-</button>
   </>
  );
}

export default App;