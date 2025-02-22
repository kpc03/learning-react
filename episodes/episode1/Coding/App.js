/*
*
suppose we have to create nested div and how we are going to do it using react.createElement
<div id="parent">
    <div id="child">
        <h1>Hello I am h1 tag inside child 1</h1>
        <h2>Hello I am h1 tag inside child 1</h2> //now here its sibling more than one child inside child1 div.
    </div>
    <div id="child">
        <h1>Hello I am h1 tag inside child 1</h1>
        <h2>Hello I am h1 tag inside child 1</h2> //now here its sibling more than one child inside child1 div.
    </div>
</div>

*/

const parent = React.createElement(
    "div",
    {id: "parent"},
     // now there are 2 child in parent - so we are going to achieve it - will have array inside parent element which will have 2 div in an array
    [
        React.createElement("div",{id: "child1"}, 
            [
                React.createElement("h1", {}, "Hello I am h1 tag inside child 1"),
                React.createElement("h2", {}, "Hello I am h2 tag inside child 1")
            ]
        ),
        React.createElement("div",{id: "child2"}, 
            [
                React.createElement("h1", {}, "Hello I am h1 tag inside child 2"),
                React.createElement("h2", {}, "Hello I am h2 tag inside child 2")
            ]
        )
    ]
)

const heading = React.createElement(
    "h1", 
    {id: "heading", data: "headingH1"}, 
    "Hello World from React!");
console.log(heading); //it will return the object and not the actual H1. This is not yet the h1 tag of html - this is only the javascript object or you can react element.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); // when we pass here the heading(which is react element else the object - then this render method is responsible for creating the HTML element which is h1)