import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {getSelectedUser} from '../actions/user'; 
import {Redirect, Link} from 'react-router-dom';
import '../styles/match.css'; 

export class Match extends React.Component {

    handleMatchClick() {
        // console.log("ITS WORKING", this.props.user.username)
        this.props.dispatch(getSelectedUser(this.props.user.username))
            .then(this.setState({redirectDisplayed: true}))
    }

    render() {
        if (this.props.redirectDisplayed) {
            return <Redirect to="/search-user-profile" />;
        }

        let sectionStyle = {
            backgroundImage: `url(${this.props.user.picture})`, 
        };
        return (
            <div className="match" onClick={() => this.handleMatchClick()}>
                <div className="picture-container">    
                    <div className="profilePic" style={sectionStyle}>
                    </div>
                </div>
                <div>
                    <p className="match-text">{this.props.user.username}<br /> {this.props.user.score}% Match</p>
                   
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        redirectDisplayed: state.user.redirectDisplayed, 
        username: state.auth.currentUser ? state.auth.currentUser.username : null, 
    };
};

export default (connect(mapStateToProps)(Match));
