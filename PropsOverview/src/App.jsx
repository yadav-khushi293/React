
import './App.css'
import { Card } from '../../Props_Over/src/Component/Card'


function App() {
  
  return (
    <>
      <h1>Hello</h1>

      <div style={{
        display:'flex',
        gap:'10px'
      }}>
       <Card name={'mehfooz'} age={25} email={'mehfooz@gmail.com'}/>
       <Card name={'niranjan'} email={'mehfooz@gmail.com'}/>
       <Card/>
      </div>
    </>
  )
}

export default App
