
import './App.css'

import {Card} from '../src/Component/Card'

export const App=()=>{

  return(
    <>

    <h1>hello</h1>

    <div style={{display:'flex',gap:'10'}}>

      <Card name={'mehfooz'} age={25} email={'mehfooz@gmail.com'}/>
       <Card name={'niranjan'} email={'mehfooz@gmail.com'}/>
       <Card/>
    </div>
    </>
  )
}

