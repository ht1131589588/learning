import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './demo1.js';
import LoginControl from './LoginControl';
import { Mailbox,Page, NumberList } from './demo3';

/**
 * 
 */
const numbers = [1,2,3,4,5];

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <div>
        {/* <Clock /> */}
        {/* <Greeting isLoggedIn = {false} />
        <Greeting isLoggedIn = {true} />
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page /> */}
        <NumberList numbers={numbers} />
    </div>,
    document.getElementById('root')
);