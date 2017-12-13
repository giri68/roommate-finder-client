import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 
import '../styles/profile.css'; 

export class SearchUserProfile extends React.Component {
  
  render() {

    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    let name; 
    if(this.props.firstName && this.props.lastName){
      name = <div className="search-user-profile-name"><h1>{this.props.firstName} {this.props.lastName}</h1></div>
    }
    let city; 
    if(this.props.city){
      city = <div className="search-user-profile-city"><p><strong>City:</strong> {this.props.city}</p></div>
    }
    let state; 
    if(this.props.state){
      state =  <div className="search-user-profile-state"><p><strong>State:</strong> {this.props.state}</p></div>
    }
    let age; 
    if(this.props.age){
      age = <div className="search-user-profile-age"><p><strong>Age:</strong> {this.props.age}</p></div>
    }
    let bio; 
    if(this.props.bio){
      bio = <div className="search-user-profile-bio"><p><strong>Bio:</strong> {this.props.bio}</p></div>
    }
    let interests; 
    if(this.props.interests){
      interests = <div className="search-user-profile-interests"><p><strong>Interests:</strong> {this.props.interests}</p></div>
    }
    let music; 
    if(this.props.music){
      music = <div className="search-user-profile-music"><p><strong>Music:</strong> {this.props.music}</p></div>
    }
    let movies; 
    if(this.props.movies){
      movies = <div className="search-user-profile-movies"><p><strong>Movies:</strong> {this.props.movies}</p></div>
    }
    let tv; 
    if(this.props.tv){
      tv = <div className="search-user-profile-tv"><p><strong>TV:</strong> {this.props.tv}</p></div>
    }

    return (
      <div className="search-user-profile">
        <div className="profile-picture">
        </div>
        <div className="right-section">
          { name }
          { city }
          { state }
          { age }
          { bio }
          { interests }
          { music }
          { movies }
          { tv }
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore 
            et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  if (state.auth.currentUser) {
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
      tv: state.user.selectedUser.tv
    }
  }
  return {
    loggedIn: state.auth.currentUser !== null
  }
};

export default connect(mapStateToProps)(SearchUserProfile);