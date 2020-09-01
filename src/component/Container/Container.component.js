import React from "react";
import "./Container.component.css";

const Container = props => (
  <div className="card">
    <h2 style={{ marginLeft: props.titleLeftMargin }}>{props.title}</h2>
    {props.children}
  </div>
);

export default Container;
