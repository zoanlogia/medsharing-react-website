import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router/Router.jsx";
import './css-compiled/index.css'
import LanguageProvider from './providers/LanguageProvider';
import ThemeProvider from './providers/ThemeProvider.jsx';
import I18nProvider from './providers/I18nProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <LanguageProvider>
        <I18nProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </I18nProvider>
      </LanguageProvider>
    </React.StrictMode>,
  )