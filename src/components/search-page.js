import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {findARoom} from '../actions/user';
import '../styles/search-page.css'; 

export  class SearchPage extends React.Component {

    click() {
        this.props.dispatch(findARoom());
    }
    
    render(){  
        return (  
        <div className="search-page">
            
            <div className="section">
                <p onClick={() => this.click()}> <Link to="/register">FIND A ROOM</Link></p>
            </div>

            <div className="section">
                <p onClick={() => this.click()}><Link to="/register">FILL A ROOM</Link></p>
            </div>

            <div className="section">
                <p onClick={() => this.click()}><Link to="/register">FIND A ROOMMATE</Link></p>
            </div>
            
        </div>
        );
    };
}

export default connect()(SearchPage);

