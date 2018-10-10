import React from "react";
import { hydrate } from "react-dom";

// components
import App from "./components/App";

hydrate(
  <App />,
  document.getElementById("react")
);