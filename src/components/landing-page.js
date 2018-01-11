import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../styles/landing-page.css'; 
import LoginForm from './login-form';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            howItWorksDisplayed: false, 
            aboutUsDisplayed: false,
            technologyDisplayed: false, 
            buttonsDisplayed: true
        }
    }

    handleHowItWorksDisplay() {
        this.setState({
            howItWorksDisplayed: !this.state.howItWorksDisplayed,
            buttonsDisplayed: !this.state.buttonsDisplayed
        }); 
    }

    handleAboutUsDisplay() {
        this.setState({
            aboutUsDisplayed: !this.state.aboutUsDisplayed,
            howItWorksDisplayed: false,
            technologyDisplayed: false,
            buttonsDisplayed: !this.state.buttonsDisplayed
        }); 
    }

    handleTechnologyDisplay() {
        this.setState({
            technologyDisplayed: !this.state.technologyDisplayed,
            aboutUsDisplayed: false,
            howItWorksDisplayed: false,
            buttonsDisplayed: !this.state.buttonsDisplayed
        }); 
    }
    
    render() {
        let howItWorks, buttons, aboutUs, Technology; 
        if(this.state.howItWorksDisplayed) {
            howItWorks = (
                <div className="popout-section">
                    <h1>How It Works</h1>
                    <p>Have you ever rented a room only to find out that your absolutely hated your new roommate? 
                    We can help! Roommate Finder is an application that not only helps you find available rooms
                    in your area, it uses a algorithm to match you with the perfect roommate! 
                    <br /><br />
                    To start the process, create an account using the links above or by clicking <Link className="login-link" to="/start">here</Link>. Once you 
                    have logged in, fill out your user profile. Upon completion, you will be matched with perfect roommates that live 
                    in your neighborhood! If you see someone you would like to talk to, simply reach out to them using the message system. 
                    </p>
                    <button className="button-dark" onClick={() => this.handleHowItWorksDisplay()}>Close</button>
                </div>
            )
        }
        if(this.state.technologyDisplayed) {
            howItWorks = (
                <div className="popout-section">
                    <h1>Technology</h1>
                    <p>This application was constructed using ES6, React, Redux, Node, Express, MongoDB, Mongoose, Cloudinary, Google Maps API, Mailgun, Enzyme, Heroku and Netflify.  
                    </p>
                    <button className="button-dark" onClick={() => this.handleTechnologyDisplay()}>Close</button>
                </div>
            )
        }
        if(this.state.aboutUsDisplayed) {
            howItWorks = (
                <div className="popout-section">
                    <h1>About Us</h1>
                    <p>This application was constructed in 2018 by Jack Seabolt, Eric Pcholinsky and Giri Pandit.
                    </p>
                    <button className="button-dark" onClick={() => this.handleAboutUsDisplay()}>Close</button>
                </div>
            )
        }
        if(this.state.buttonsDisplayed) {
            buttons = (
            <div className="button-outer-wrapper">
                <div onClick={() => this.handleHowItWorksDisplay()} className="button-wrapper">
                    <div className="button-inner-left">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </div>
                    <div className="button-inner-right">
                        <h2 className="button-label" onClick={() => this.handleHowItWorksDisplay()}>How it works</h2>
                    </div>
                </div>
                <div onClick={() => this.handleTechnologyDisplay()} className="button-wrapper">
                    <div className="button-inner-left">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </div>
                    <div className="button-inner-right">
                        <h2 className="button-label" onClick={() => this.handleTechnologyDisplay()}>Technology</h2>
                    </div>
                </div>
                <div onClick={() => this.handleAboutUsDisplay()} className="button-wrapper">
                    <div className="button-inner-left">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </div>
                    <div className="button-inner-right">
                        <h2 className="button-label" onClick={() => this.handleAboutUsDisplay()}>About Us</h2>
                    </div>
                </div>
            </div>
            ); 
        }
        return (
            <div>
                <div className="landing-page">
                    <div className="text-section">
                        <h1>Roommate Finder</h1>
                        <p>Don't just look for a great apartment, look for great roommates</p>
                        <Link to="/start"><button className="button-blue">Get Started</button></Link>
                        <div>
                        <p>Already have an account? <span className="login-link"><Link to="/login">Login</Link></span></p>
                        </div>
                    </div>
                </div>
                {buttons}
                {howItWorks}
            </div>
        );
    }
}

