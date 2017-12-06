import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';



export function SearchPage(props) {
    
    return (
        <div className="searchPage">
            <div>
              <Link to="/register">Find a room</Link>
            </div>
            <div>
            <Link to="/register">Fill a room</Link>
            </div>
            <div>
           <Link to="/register">Find a roommate</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SearchPage);
