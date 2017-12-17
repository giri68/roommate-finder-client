import React from "react";
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import {setCurrentChat} from '../actions/user';

export class ChatDashboard extends React.Component{
    render(){
       const conversation = this.props.conversations.map((conversation, index) => (
        <div key={index}><Link to='/chat' onClick={() => this.props.dispatch(setCurrentChat(conversation.conversation))}>{conversation.other_user}</Link></div>

       ))
        return (
            <div className="chat">
              {conversation}
            </div>
                        
        );
    }
}

export const mapStateToProps = (state) => {
  console.log('state--', state.auth.currentUser)
  return {
  username: state.auth.currentUser ? state.auth.currentUser.username : null,
  conversations: state.auth.currentUser.conversations ? state.auth.currentUser.conversations : []

}}
export default connect(mapStateToProps)(ChatDashboard);