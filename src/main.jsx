import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router/Router";
import "./css-compiled/index.css";
import LanguageProvider from "./providers/LanguageProvider";
import ThemeProvider from "./providers/ThemeProvider";
import I18nProvider from "./providers/I18nProvider";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <AnimatePresence>
      <LanguageProvider>
        <I18nProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </I18nProvider>
      </LanguageProvider>
      </AnimatePresence>
  </React.Fragment>
);
