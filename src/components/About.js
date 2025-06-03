import React from "react";
import User from './User';
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container body">
                <h1 style={{marginBottom: "40px"}}>About Us Page</h1>
                <div style={{display: 'flex', gap: "20px"}}>
                    <UserClass/>
                </div>
            </div>
        );
    }
}

export default About;