
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ContextComponents } from './Context/ContextComponets.jsx'

createRoot(document.getElementById('root')).render(
  <ContextComponents>
    <App />
  </ContextComponents>,
)
