import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'; 
import { saveCurrentChat } from '../actions/user';
import '../styles/profile.css'; 

export class SearchUserProfile extends React.Component {

  handleChatRoom(){
    let chatRoom = `${this.props.username}-${this.props.selectedUsername}`
    let data = {}
    data.user1 = this.props.username
    data.user2 = this.props.selectedUsername
    data.currentChat = chatRoom
    console.log('chatroom', data);
    this.props.dispatch(saveCurrentChat(data));
    
  }

  render() {

    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    let name; 
    if(this.props.firstName && this.props.lastName){
      name = <div className="search-user-profile-name"><h1>{this.props.firstName} {this.props.lastName}</h1></div>
    }
    let age; 
    if(this.props.age){
      age = <div className="search-user-profile-age"><strong>Age:</strong> {this.props.age}</div>
    }
    let bio; 
    if(this.props.bio){
      bio = <div className="search-user-profile-bio"><strong>Bio:</strong> {this.props.bio}</div>
    }
    let interests; 
    if(this.props.interests){
      interests = <div className="search-user-profile-interests"><strong>Interests:</strong> {this.props.interests}</div>
    }
    let music; 
    if(this.props.music){
      music = <div className="search-user-profile-music"><strong>Music:</strong> {this.props.music}</div>
    }
    let movies; 
    if(this.props.movies){
      movies = <div className="search-user-profile-movies"><strong>Movies:</strong> {this.props.movies}</div>
    }
    let tv; 
    if(this.props.tv){
      tv = <div className="search-user-profile-tv"><strong>TV:</strong> {this.props.tv}</div>
    }
    let looking_for; 
    if(this.props.looking_for){
      if (this.props.looking_for === 'fill_a_room') {
        looking_for = <div className="search-user-profile-looking-for"><strong>Status: </strong>Has a room available for rent</div> 
      } else if (this.props.looking_for === 'find_a_room') {
        looking_for = <div className="search-user-profile-looking-for"><strong>Status: </strong>Looking for a room to rent</div>
      } else {
        looking_for = <div className="search-user-profile-looking-for"><strong>Status: </strong>Looking for a roommate</div>
      }
    }

    let sectionStyle = {
      backgroundImage: `url(${this.props.picture})`, 
    };

    

    return (
      <div className="search-user-profile">
        <div className="left-section">
          <div style={sectionStyle} className="profile-picture">
          </div>
        </div>
        <div className="right-section">
          { name }
          <p><strong>Location:</strong> {this.props.city}, {this.props.state}
          <br />
          {age}
          { looking_for }</p>
          {/* { age } */}
          <p>
          { bio }
          { interests }
          { music }
          { movies }
          { tv }

          </p>
          <Link onClick={() => this.handleChatRoom()} to='/chat'>message</Link>
          </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  if (state.auth.currentUser) {
    console.log("MATCH:", state.user.selectedUserMatch)
    console.log("SEL USER:", state.user.selectedUser)
    console.log('current user', state.user.currentChat)
    return {
      loggedIn: state.auth.currentUser !== null,
      id: state.user.selectedUser.id,
      firstName: state.user.selectedUser.firstName,
      lastName: state.user.selectedUser.lastName,
      city: state.user.selectedUser.city,
      state: state.user.selectedUser.state,
      age: state.user.selectedUser.age,
      bio: state.user.selectedUser.bio,
      interests: state.user.selectedUser.interests,
      music: state.user.selectedUser.music,
      movies: state.user.selectedUser.movies,
      tv: state.user.selectedUser.tv, 
      picture: state.user.selectedUser.picture,
      looking_for: state.user.selectedUser.looking_for,
      username: state.auth.currentUser.username,
      selectedUsername: state.user.selectedUser.username
    }
  }
  return {
    loggedIn: state.auth.currentUser !== null
  }
};

export default connect(mapStateToProps)(SearchUserProfile);