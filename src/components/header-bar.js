import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
import '../styles/header-bar.css';  

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <p className="nav-item" onClick={() => this.logOut()}>Log out</p>
            );
        }
        let questionsButton; 
        if (this.props.loggedIn) {
            questionsButton = (
                <p className="nav-item"><Link to="/questions">Questions</Link></p>
            )
        }
        let dashboardButton; 
        if(this.props.loggedIn) {
            dashboardButton = (
                <p className="nav-item"><Link to="/dashboard">Dashboard</Link></p>
            )
        }
        let mainButton; 
        if(this.props.loggedIn) {
            mainButton = (
                <p className="nav-item"><Link to="/">Main</Link></p>
            )
        }
        let profileButton; 
        if(this.props.loggedIn) {
            profileButton = (
                <p className="nav-item"><Link to="/profile">Profile</Link></p>
            )
        }
        return (
            <div className="header-bar">
                    {mainButton}
                    {logOutButton}
                    {questionsButton}
                    {dashboardButton}
                    {profileButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
