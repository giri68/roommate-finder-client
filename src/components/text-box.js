import React from "react"
import {connect} from 'react-redux';
import {getSelectedUser, setSelectedUserMatch} from '../actions/user'; 

export class TextBox extends React.Component {
    handleMatchClick(username, score) {
        this.props.dispatch(getSelectedUser(username))
            .then(() => this.props.dispatch(setSelectedUserMatch(score)))
    }
      render() {
          return (
              <div onClick={event => this.handleMatchClick(this.props.profile.username, this.props.profile.score)} className="textBox">
              {"Username:"}{this.props.profile.username}
              <br/>
              {"Score:"}{this.props.profile.score}
              </div>
          );
      }
  }

export default (connect()(TextBox));