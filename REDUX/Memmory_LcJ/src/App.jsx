
import { useState } from 'react'
import { CounterEffect } from './Component/CounterEffect'
function App() {
  const [toogle, setToogle] = useState(0)

  return (
    <>
      {toogle && <CounterEffect/>}
      <button onClick={()=>{setToogle((prev)=>!prev)}}>Toogle</button>
    </>
  )
}

export default App
