import { hot } from "react-hot-loader/root";
import React from "react";
import { render } from "react-dom";

import App from "./App";
import "./index.css";

console.log("helloworld 123321");

if (module.hot) {
  module.hot.accept();
}

const Root = hot(App);
render(<Root />, document.getElementById("root"));
