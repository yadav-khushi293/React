
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Card } from './Component/Card.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)

