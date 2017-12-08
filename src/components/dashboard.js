import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {getAllUsers} from '../actions/user'; 
import {Redirect} from 'react-router-dom';
import '../styles/dashboard.css'; 
import Match from './match'; 

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
            return <Redirect to="/login" />;
        }

        let currentMatches = this.props.profileMatches.map((match, index ) => (
            <Match key={index} user={match} />
        )); 

        return (
            <div className="dashboard">
                <div className="dashboard-half">
                    <div className="map">
                    
                    </div>
                </div>
                <div className="dashboard-half">
                    { currentMatches }
                </div>
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
