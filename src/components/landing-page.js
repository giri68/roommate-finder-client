import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export default function LandingPage(props) {

    return (
        <div className="home">
            <h1>Roommate Finder</h1>
            <p> Don't just look for a great apartment, look for a great roommate tool</p>
            <button className="button-blue"><Link to="/searchPage">Get Started</Link></button>
            <div>
            <p>Already have an account? <span className="login-link"><Link to="/login">Login</Link></span></p>
            </div>
        </div>
    );
}

