import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router/Router.jsx";
import './css-compiled/index.css'
import { LanguageProvider } from './contexts/LanguagesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <LanguageProvider>
      <Router />
      </LanguageProvider>
    </React.StrictMode>,
  )