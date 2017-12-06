import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export default function LandingPage(props) {

    return (
        <div className="home">
           
            <p> Don't just look for a great apartment, look for a great roommate tool</p>
            <button><Link to="/searchPage">Get Started</Link></button>
            <div>
            <span className="landing-text">Already have an account?</span>
            <span className="login-link"><Link to="/login">Login</Link></span>
            </div>
        </div>
    );
}

