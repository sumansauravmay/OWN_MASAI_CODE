// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
 import AppContestProvider from "./Contest/AppContestProvider";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
   <AppContestProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </AppContestProvider>
);
