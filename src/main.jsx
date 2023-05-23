import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router/Router.jsx";
import '../style/output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  )