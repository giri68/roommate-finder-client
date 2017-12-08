import React from 'react';
import { connect } from 'react-redux';

export class SearchUserProfile extends React.Component {

  render() {
    return (
      <div id="search-user-profile">
        <div className="search-user-profile-name"><h1>`{this.props.firstName} {this.props.lastName}`</h1></div>
        <div className="search-user-profile-city">Name: {this.props.city}</div>
        <div className="search-user-profile-state">Name: {this.props.state}</div>
        <div className="search-user-profile-age">Name: {this.props.age}</div>
        <div className="search-user-profile-bio">Name: {this.props.bio}</div>
        <div className="search-user-profile-interests">Name: {this.props.interests}</div>
        <div className="search-user-profile-music">Name: {this.props.music}</div>
        <div className="search-user-profile-movies">Name: {this.props.movies}</div>
        <div className="search-user-profile-tv">Name: {this.props.tv}</div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  id: state.auth.currentUser.id,
  
  firstName: state.auth.currentUser.firstName,
  lastName: state.auth.currentUser.lastName,
  city: state.auth.currentUser.city,
  state: state.auth.currentUser.state,
  age: state.auth.currentUser.age,
  bio: state.auth.currentUser.bio,
  interests: state.auth.currentUser.interests,
  music: state.auth.currentUser.music,
  movies: state.auth.currentUser.movies,
  tv: state.auth.currentUser.tv
});

export default connect(mapStateToProps)(SearchUserProfile);