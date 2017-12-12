import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import { getAllUsers } from '../actions/user';
import { Redirect } from 'react-router-dom';
import '../styles/dashboard.css';
import Match from './match';

export class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            dataPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    handleNext() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }
    handlePrevious() {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    }
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }

        this.props.dispatch(getAllUsers());
    }

    render() {

        if (!this.props.loggedIn) {
            return <Redirect to="/login" />;
        }

        let currentMatches = this.props.profileMatches.map((match, index) => (
            <Match key={index} user={match} />
        ));
        const { currentPage, dataPerPage } = this.state;

        const indexOfLastData = currentPage * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        const renderCurrent = currentMatches.slice(indexOfFirstData, indexOfLastData);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(currentMatches.length / dataPerPage); i++) {
            pageNumbers.push(i);
        }
       const next = (pageNumbers.length > currentPage) ? <button onClick= {() => this.handleNext()}>next</button> : null;
       const previous = (currentPage > 1) ? <button onClick= {() => this.handlePrevious()}>previous</button> : null;
          
        
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li  key={number} id={number} onClick={this.handleClick}>
                    {number}
                   
                </li>
            );
        });

        return (
            <div className="dashboard">
                <div className="dashboard-half">
                    <div className="map">
                        {this.props.username}
                    </div>
                </div>
                <div className="dashboard-half">
                    {renderCurrent}

                    <ul id='page-numbers'>
                        {previous}
                        {renderPageNumbers}
                        {next}
                    </ul>
                   
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        loggedIn: state.auth.currentUser !== null,
        username: state.auth.currentUser ? state.auth.currentUser.username : null,
        name: state.auth.currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : null,
        protectedData: state.protectedData.data,
        profileMatches: state.user.profileMatches
    };
};

export default (connect(mapStateToProps)(Dashboard));
