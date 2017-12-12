import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {setLookingFor} from '../actions/user';
import '../styles/start.css'; 

export  class Start extends React.Component {

    click(looking_for) {
        this.props.dispatch(setLookingFor(looking_for));
    }
    
    render(){  
        return (  
        <div className="start">
             <Link to="/register">
                <div className="section">
                    <h3 onClick={() => this.click("find_a_room")}>Find a Room</h3>
                </div>
            </Link>
            <Link to="/register">
                <div className="section">
                    <h3 onClick={() => this.click("fill_a_room")}>Fill a Room</h3>
                </div>
            </Link>
            <Link to="/register">
                <div className="section">
                    <h3 onClick={() => this.click("find_a_roommate")}>Find a Roommate</h3>
                </div>
            </Link>
        </div>
        );
    }
}

export default connect()(Start);

