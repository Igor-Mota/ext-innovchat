import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./main/index";

console.log(document.getElementById("app"));

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
