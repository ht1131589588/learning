import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './demo1.js';
import Greeting from './Greeting';



ReactDOM.render(
    <div>
        {/* <Clock /> */}
        <Greeting isLoggedIn = {false} />
        <Greeting isLoggedIn = {true} />
    </div>,
    document.getElementById('root')
);