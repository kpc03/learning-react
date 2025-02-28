import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style1.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const DiscoveryPage = () => {
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <DiscoveryPage/>,
        errorElement: <Error/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])



// Creating a root element for React to render the component
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={appRouter}/>);