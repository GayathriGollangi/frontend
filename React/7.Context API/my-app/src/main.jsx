import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeProvider from './ContextApi/ThemeProvider.jsx'
import AuthenticationProvider from './ContextApi/AuthenticationProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthenticationProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </AuthenticationProvider>
)
