import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {getAllUsers} from '../actions/user'; 
import {Redirect} from 'react-router-dom';
import '../styles/match.css'; 

export class Match extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user
        }
    }

    render() {
        return (
            <div className="match">
                <h3>{this.state.user.username}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser ? state.auth.currentUser.username : null
    };
};

export default (connect(mapStateToProps)(Match));
