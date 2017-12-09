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
        return (
            <div className="match" onClick={() => this.handleMatchClick()}>
                <h3>{this.props.user.username}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        redirectDisplayed: state.user.redirectDisplayed, 
        username: state.auth.currentUser ? state.auth.currentUser.username : null
    };
};

export default (connect(mapStateToProps)(Match));
