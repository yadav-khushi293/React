
import { createRoot } from 'react-dom/client'
// import {App} from './App.jsx'
import {AddTodo} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <AddTodo/>
  </>,
)
