import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./component/pages/Root";
import About from "./component/pages/About";
import Router from "./router/Router";
import Route from "./router/Route";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
