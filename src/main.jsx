import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "../TodoContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
