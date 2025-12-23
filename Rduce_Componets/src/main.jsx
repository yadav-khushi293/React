import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Counter } from './Componets/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Counter/>
  </>,
)
