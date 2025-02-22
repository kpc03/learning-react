import React from "react";
import ReactDOM from "react-dom";
import "./styles/style1.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const DiscoveryPage = () => {
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}



// Creating a root element for React to render the component
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<DiscoveryPage/>);