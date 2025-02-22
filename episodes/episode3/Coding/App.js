import React from "react";
import ReactDOM from "react-dom";

// JSX
const jsxHeading = <h2 id="heading"> hello I am JSX Heading</h2>;
console.log(jsxHeading);

// Functional Component
const Heading = () => {
    return <h1>I am title of heading functional component</h1>
}

const Container = () => {
    return (
        <div id="container">
            <Heading/>
            <h2>I am heading of container functional component</h2>
        </div>
    );
}

// CODING ASSIGNMENT - EPISODE 3 
// USING REACT.CREATEELEMENT
const header = React.createElement("div", {class: "title"}, 
    [
        React.createElement("h1", {}, "Hi, I am h1 heading inside title container"),
        React.createElement("h2", {id: "h2"}, "Hi, I am h2 heading inside title container"),
        React.createElement("h3", {}, "Hi, I am h3 heading inside title container")
    ]
);

// USING FUNCTIONAL COMPONENT
const headerJSX = (
    <div className="title">
        <h1>Hi, I am h1 heading inside title container using JSX</h1>
        <h2 id="h2">Hi, I am h2 heading inside title container using JSX</h2>
        <h3>Hi, I am h3 heading inside title container using JSX</h3>
    </div>
);

// USING FUNCTIONAL COMPONENT
const HeaderFunct = () => {
    return(
        <div className="title">
            <h1>Hi, I am h1 heading inside title container using Functional Component</h1>
            <h2 id="h2">Hi, I am h2 heading inside title container using Functional Component</h2>
            <h3>Hi, I am h3 heading inside title container using Functional Component</h3>
            {<Container/>}
        </div>
    );
}


// Creating a root element for React to render the component
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<HeaderFunct/>);