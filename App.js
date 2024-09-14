import React from "react";
import ReactDOM from "react-dom/client";

//React will have core features of react and it can create React elements which is nothing but objects

//React.createElement => ReactElement(JS Object) => HTMLElement(render)

//React way of creating React elements
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

//JSX way of creating React elements

// JSX => Babel transpiles it to React.createElement => ReactElement(JS Object) => HTMLElement(render)

//Single ine
const jsxHeading1 = <h1 id="heading">Namaste React using JSX 🚀</h1>;

//Multiple lines
const jsxHeading2 = (
  <h1 id="heading" className="head">
    Namaste React using JSX 🚀
  </h1>
);

console.log(jsxHeading1);

//React Functional Component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

//The above component can also be written as below in a single line using Arrow functions
const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;

//If JSX having more than one line or a bigger line then you can wrap it inside curved brackets like below
const HeadingComponent3 = () => (
  <h1 className="heading">Namaste React Functional Component</h1>
);

const HeadingComponent4 = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const Title = function () {
  return <h1 id="heading">Namaste React Title using JSX 🚀</h1>;
};

//Component Composition - Using one component inside another component
const HeadingComponent5 = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

//If you put curly braces inside JSX - {}, then you can write any piece of javascript inside those curly braces

const title = <h1 id="heading">Namaste React using JSX 🚀</h1>;
const number = 10000;
const HeadingComponent6 = () => (
  <div id="container">
    {number}
    {title}
    {100 + 200}
    {console.log("abcdef")}
    {Title()}
    <h2>{number}</h2>
    <h2>{title}</h2>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

//ReactDOM will interact with HTML DOM and will convert React elements to HTML elements and will put it in HTML DOM by replacing (not appending) the children of root element.
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading1);
root.render(<HeadingComponent6 />);
