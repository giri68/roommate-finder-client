import React from 'react';
import { connect } from 'react-redux';

export class SearchUserProfile extends React.Component {

  render() {
    if(this.props.firstName && this.props.lastName) {

    }

    return (
      <div id="search-user-profile">
        <div className="search-user-profile-name"><h1>{this.props.firstName} {this.props.lastName}</h1></div>
        <div className="search-user-profile-city">City: {this.props.city}</div>
        <div className="search-user-profile-state">State: {this.props.state}</div>
        <div className="search-user-profile-age">Age: {this.props.age}</div>
        <div className="search-user-profile-bio">Bio: {this.props.bio}</div>
        <div className="search-user-profile-interests">Interests: {this.props.interests}</div>
        <div className="search-user-profile-music">Music: {this.props.music}</div>
        <div className="search-user-profile-movies">Movies: {this.props.movies}</div>
        <div className="search-user-profile-tv">TV: {this.props.tv}</div>
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