import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./portfolio.js"; // Update the file name with lowercase "p"
import "./styles.css";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById("root")
);
