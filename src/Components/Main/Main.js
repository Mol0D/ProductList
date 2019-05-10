import React from 'react';
import './Main.css';
import logo from '../../logo.svg';

const Main = () =>{
    return (
        <div className='main'>
            <img src={logo} className="main-logo" alt="logo"/>
        </div>
    )
}

export default Main;