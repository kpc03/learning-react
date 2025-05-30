import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style1.css";
import CountryExercise from '../components/CountryExercise'

const Country = () => {
    return(
        <>
            <CountryExercise/>
        </>
    );
}



// Creating a root element for React to render the component
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Country/>);