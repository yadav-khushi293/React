import './App.css';
import {Name} from "./Componet/Name.jsx"

export function App() {

  const arr=["mehfooz","vivek","nirajan","govind"]

  let name= 'vivek mishra-1';

  return (
    <>
    <h1 className='vivek'>hello {name}</h1>
    <h1 style={{color:'purple'}}> hello</h1>
    <Name/>

    {
      arr.map((el)=>(
        <div>
          <li>{el}</li>
        </div>
      ))
    }

    </>
  );
}
export default App;
