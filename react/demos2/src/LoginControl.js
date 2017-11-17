import React from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
    return (
        <button>
            
        </button>
    );
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
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
            button = 
        }
        return (
            <div>

            </div>
        );
    }
}