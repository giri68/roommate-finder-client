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
        const user = this.props.currentUser
        console.log(user)
        this.props.dispatch(getAllUsers(user));
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
         
        let renderCurrent;
        if (this.props.profileMatches.length === 0){
           renderCurrent = <p>Sorry, there are no apartments or roommates that match your search critera.</p>
        }
        else {
        renderCurrent = currentMatches.slice(indexOfFirstData, indexOfLastData);
        }

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(currentMatches.length / dataPerPage); i++) {
            pageNumbers.push(i);
        }
        const next = (pageNumbers.length > currentPage) ? <i className="fa fa-arrow-circle-right pagination-navigation" onClick= {() => this.handleNext()} aria-hidden="true"></i> : null;
        const previous = (currentPage > 1) ? <i className="fa fa-arrow-circle-left pagination-navigation" onClick= {() => this.handlePrevious()} aria-hidden="true"></i>: null;
          
        
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="pagination-number" key={number} id={number} onClick={this.handleClick}>
                    {number}
                </li>
            );
        });

        return (
            <div className="dashboard">
                <div className="dashboard-half">
                    <div className="map">
                        
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
        profileMatches: state.user.profileMatches,
        currentUser: state.auth.currentUser
    };
};

export default (connect(mapStateToProps)(Dashboard));
