import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseProvider } from "./context/Firebase";

ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  document.getElementById("root")
);
