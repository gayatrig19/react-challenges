import React, { Component } from "react";
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log in",
        }
    }

    // handleClick = () => {
    //     this.setState((prevState) => ({
    //         message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
    //         buttonText: prevState.buttonText === "Logout" ? "Login" : "Logout",
    //     }), ()=>  console.log(this.state.message))  
       
    // }

    handleClick() {
        this.setState((prevState) => {
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "Logout" ? "Login" : "Logout",
            };     
        }, () => {
            console.log(this.state.message);
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>   
            </div>
        )
    }
}

export default NavBarSimple;