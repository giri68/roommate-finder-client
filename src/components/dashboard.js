import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {getAllUsers} from '../actions/user'; 
import {Redirect} from 'react-router-dom';
import '../styles/dashboard.css'; 

export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(getAllUsers()); 
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        let currentMatches = this.props.profileMatches.map((match, index ) => (
            <div className="dashboard-match-result" key={index}>   
                <h2> {match.username }</h2>
            </div>
        )); 

        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
                { currentMatches }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: state.auth.currentUser !== null,
        username: state.auth.currentUser ? state.auth.currentUser.username : null,
        name: state.auth.currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : null,
        protectedData: state.protectedData.data, 
        profileMatches: state.user.profileMatches
    };
};

export default (connect(mapStateToProps)(Dashboard));
