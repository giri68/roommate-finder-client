import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../styles/landing-page.css'; 

import LoginForm from './login-form';

export default function LandingPage(props) {

    return (
        <div className="landing-page">
            <div className="text-section">
                <h1>Roommate Finder</h1>
                <p>Don't just look for a great apartment, look for a great roommate.</p>
                <button className="button-blue"><Link to="/start">Get Started</Link></button>
                <div>
                <p>Already have an account? <span className="login-link"><Link to="/login">Login</Link></span></p>
                </div>
            </div>
        </div>
    );
}

