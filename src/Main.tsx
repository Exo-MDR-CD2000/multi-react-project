import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as RouterProvider } from 'react-router-dom';

// Import Components
import App from './App.tsx' // Import App Component


// Import Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

// Styles
import './css/index.css'
import './css/App.css'

// Remove this after testing all breakpoints
// import './css/bootstrap-breakpoint.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>,
)
