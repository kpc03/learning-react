import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy Name",
                designation: "Dummy XYZ",
                location: "Dummy BBC",
                avatar_url: "https://placehold.co/300x250"
            }
        }
    }

    async componentDidMount(){
        // console.log(this.props.name + " Child componentDidMount called");
        const data = await fetch('https://api.github.com/users/kpc03');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log(this.props.name + " Child componentDidUpdate called")
    }

    componentWillUnmount(){
        console.log(this.props.name + " Child componentWillUnmount called")
    }

    render(){
        // console.log(this.props.name + " Child render called");
        const {name, avatar_url, bio, location} = this.state.userInfo;
        console.log(this.state);
        return(
            <div className="user-card">
                <img src={avatar_url} alt={name}/>
                <h2>Name: {name}</h2>
                <h2>Designation: {bio}</h2>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;