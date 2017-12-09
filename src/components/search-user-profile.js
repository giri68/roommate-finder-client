import React from 'react';
import { connect } from 'react-redux';

export class SearchUserProfile extends React.Component {

  render() {

    let name; 
    if(this.props.firstName && this.props.lastName){
      name = <div className="search-user-profile-name"><h1>{this.props.firstName} {this.props.lastName}</h1></div>
    }
    let city; 
    if(this.props.city){
      city = <div className="search-user-profile-city">City: {this.props.city}</div>
    }
    let state; 
    if(this.props.state){
      state =  <div className="search-user-profile-state">State: {this.props.state}</div>
    }
    let age; 
    if(this.props.age){
      age = <div className="search-user-profile-age">Age: {this.props.age}</div>
    }
    let bio; 
    if(this.props.bio){
      bio = <div className="search-user-profile-bio">Bio: {this.props.bio}</div>
    }
    let interests; 
    if(this.props.interests){
      interests = <div className="search-user-profile-interests">Interests: {this.props.interests}</div>
    }
    let music; 
    if(this.props.music){
      music = <div className="search-user-profile-music">Music: {this.props.music}</div>
    }
    let movies; 
    if(this.props.movies){
      movies = <div className="search-user-profile-movies">Movies: {this.props.movies}</div>
    }
    let tv; 
    if(this.props.tv){
      tv = <div className="search-user-profile-tv">TV: {this.props.tv}</div>
    }

    return (
      <div id="search-user-profile">
        { name }
        { city }
        { state }
        { age }
        { bio }
        { interests }
        { music }
        { movies }
        { tv }
      </div>
    )
  }
}

export const mapStateToProps = state => {
  console.log("THIS IS THE ONE", state.user.selectedUser)
  return {
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
}};

export default connect(mapStateToProps)(SearchUserProfile);