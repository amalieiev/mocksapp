import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { worker } from "./mocks/browser";
import { Auth } from "./hooks/auth";

worker.start();

ReactDOM.render(
  <Auth>
    <App />
  </Auth>,
  document.getElementById("root")
);
