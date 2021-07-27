import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import "./components/i18n.js";
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>,
    document.body.appendChild(document.createElement("div"))
  );
});
