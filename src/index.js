// import node packages
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import antd css
import "antd/dist/antd.min.css";

//import req components
import Routes from "./view/app/App.component";

ReactDOM.render(
  <Router>
    <div>
      <Routes />
    </div>
  </Router>,
  document.getElementById("root")
);
