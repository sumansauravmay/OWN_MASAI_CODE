// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppContextProvider from "./Context/AppContextProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
