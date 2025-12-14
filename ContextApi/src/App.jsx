import './App.css'
import { Navbar } from './Componets/Navbar'
import { AllRoutes } from './Router/AllRouters'
import {BreadCrumbs} from './Componets/BreadCrumb'
function App() {
 

  return (
    <>
      <h1>api call</h1>
       <Navbar/>
       <AllRoutes/>
       <BreadCrumbs/>
      </>
   
  )
}

export default App
