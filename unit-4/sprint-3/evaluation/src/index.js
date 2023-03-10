import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AppContextProvider from "./Context/AppContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import {BrowserRouter} from "react-router-dom"

root.render(
  
  <BrowserRouter>
  <AppContextProvider>
  <App />
  </AppContextProvider>
  
  </BrowserRouter>
    
  
);

reportWebVitals();
