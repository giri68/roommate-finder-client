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
                <h3 onClick={() => this.click()}> <Link to="/register">Find a Room</Link></h3>
            </div>

            <div className="section">
                <h3 onClick={() => this.click()}><Link to="/register">Fill a Room</Link></h3>
            </div>

            <div className="section">
                <h3 onClick={() => this.click()}><Link to="/register">Find a Roomate</Link></h3>
            </div>
            
        </div>
        );
    }
}

export default connect()(SearchPage);

