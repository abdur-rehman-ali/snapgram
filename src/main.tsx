import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './lib/react-query/QueryProvider.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
