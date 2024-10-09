import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'


// Import Dependencies
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

// Styles
import './css/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
