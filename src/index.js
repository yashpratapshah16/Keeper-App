import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import App from "./App";
import { FirebaseProvider } from "./context/Firebase";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider>
    <FirebaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
