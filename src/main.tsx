import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage.tsx'
import './styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
