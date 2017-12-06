import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {findARoom} from '../actions/user';




export  class SearchPage extends React.Component {
    

     click() {
        this.props.dispatch(findARoom());
    }
    
    render(){  
        return (  
        <div className="searchPage">
            <div>
            <p  onClick={() => this.click()}> <Link to="/register">Find a room</Link></p>
            </div>
            <div>
            <p  onClick={() => this.click()}><Link to="/register">Fill a room</Link></p>
            </div>
            <div>
            <p  onClick={() => this.click()}><Link to="/register">Find a roommate</Link></p>
            </div>
        </div>
        );
    };
}

export default connect()(SearchPage);

