import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: 123 },
  "Hello World from React"
);
console.log("Heading", heading);

/*
 <div id="parent">
  <div id="child">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
  </div>
 </div> 
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Header 1"),
    React.createElement("h2", {}, "Header 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent);

// root.render(heading);

// const root2 = ReactDOM.createRoot(document.getElementById("root2"));

// root2.render(heading);
