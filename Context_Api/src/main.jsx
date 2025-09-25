import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Context_provider, Coutext_Provider} from "./Context/Context_Provider.jsx"

createRoot(document.getElementById('root')).render(
  <Context_provider>
    <App />
  </Context_provider>,
)
