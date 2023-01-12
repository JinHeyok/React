import React, { Component } from 'react';

export class LoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginID : props.loginID
        }
    }

    loginButton(props){
    return(
        <button onClick={props.onClick}>
            login
        </button>
    );
    }

    logoutButton(props){
        return(
            <button onClick={props.onClick}>
                logout
            </button>
        );
    }


    handleLoginClick = () => {
        this.setState({loginID : true});
    }

    handleLogoutClick = () => {
        this.setState({loginID : false});
    }

     UserGreeting(){
        return "Welcome Back!";
    }
      
     GuestGreeting(){
        return "Please sign up";
    }

      Greeting = () => { 
        const loginID = this.state.loginID;
        if(loginID){
            return <this.UserGreeting/>
        }else{
            return <this.GuestGreeting/>
        }
    }
    LoginController = () => {
        const loginID = this.state.loginID;
        let button;
        if(loginID){
            button = <this.logoutButton onClick={this.handleLogoutClick} />
        }else{
            button = <this.loginButton onClick={this.handleLoginClick} />
        }
        return button;
    }

    render(){

        return (
            <div>
                {this.Greeting(this.state.loginID)}
                {this.LoginController()}
            </div>
        );
    }

}


export default LoginControl;



