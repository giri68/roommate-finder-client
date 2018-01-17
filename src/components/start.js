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
                <div onClick={() => this.click("find_a_room")} className="section">
                    <h3>Find a Room</h3>
                </div>
            </Link>
            <Link to="/register">
                <div onClick={() => this.click("fill_a_room")} className="section">
                    <h3>Fill a Room</h3>
                </div>
            </Link>
            <Link to="/register">
                <div onClick={() => this.click("find_a_roommate")} className="section">
                    <h3>Find a Roommate</h3>
                </div>
            </Link>
        </div>
        );
    }
}

export default connect()(Start);

