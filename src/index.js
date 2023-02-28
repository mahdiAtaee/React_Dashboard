import React from "react";
import ReactDOM from "react-dom/client";
import "./theme/index.css";
import App from "./App";
import { UserProvider } from "./app/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
