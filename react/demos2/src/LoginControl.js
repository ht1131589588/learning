import React from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
        
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}></LoginButton>;
        }
        return (
            <div>
                <Greeting isLoggedIn = {isLoggedIn}/>
                {button}
            </div>
        );
    }
}