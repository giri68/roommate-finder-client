import React from 'react';
import { connect } from 'react-redux';

export class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameInputDisplayed: false,
      cityInputDisplayed: false,
      stateInputDisplayed: false,
      ageInputDisplayed: false,
      bioInputDisplayed: false,
      interestsInputDisplayed: false,
      musicInputDisplayed: false,
      movieInputDislayed:false,
      tvInputDisplayed: false
    }
  }

  handleNameInputToggle(){
    this.setState({inputDisplayed: !this.state.inputDisplayed})
  }
  handlCityInputToggle(){
    this.setState({cityInputDisplayed: !this.state.cityInputDisplayed})
  }
  handleStateInputToggle(){
    this.setState({stateInputDisplayed: !this.state.stateInputDisplayed})
  }
  handleAgeInputToggle(){
    this.setState({ageInputDisplayed: !this.state.ageInputDisplayed})
  }
  handleBioInputToggle(){
    this.setState({bioInputDisplayed: !this.state.bioInputDisplayed})
  }
  handleInterestsInputToggle(){
    this.setState({interestsInputDisplayed: !this.state.interestsInputDisplayed})
  }
  handleMusicInputToggle(){
    this.setState({musicInputDisplayed: !this.state.musicInputDisplayed})
  }
  handleMovieInputToggle(){
    this.setState({movieInputDislayed: !this.state.movieInputDislayed})
  }
  handleTvInputToggle(){
    this.setState({tvInputDisplayed: !this.state.tvInputDisplayed})
  }

  render() {
    var name, state, city, age, movies, music, tv, interests, bio;
    if(this.state.nameInputDisplayed){
        name = <input className="input"></input>;
    } else {
      name = this.props.name;
    }
    if(this.state.cityInputDisplayed){
      city = <input className="input"></input>;
    } else {
      city = this.props.city;
    }
    if(this.state.stateInputDisplayed){
      state = <input className="input"></input>;
    } else {
     state = <div>{this.props.state}<button onClick={() => this.handleStateInputToggle()}>edit</button></div>
    }
    if(this.state.ageInputDisplayed){
      age = <input className="input"></input>;
    } else {
      age = this.props.age;
    }
    if(this.state.bioInputDisplayed){
      bio = <form><input className="input"></input></form>;
    } else {
      bio = this.props.bio;
    }
    if(this.state.interestsInputDisplayed){
      interests = <input className="input"></input>;
    } else {
      interests = this.props.interests;
    }
    if(this.state.movieInputDislayed){
     movies = <input className="input"></input>;
    } else {
      movies = this.props.movies;
    }
    if(this.state.musicInputDisplayed){
      music = <input className="input"></input>;
     } else {
       music = this.props.music;
     }
     if(this.state.tvInputDisplayed){
      tv = <input className="input"></input>;
     } else {
       tv = this.props.tv;
     }
     
    var fullName = `${this.props.firstName} ${this.props.lastName}`;
    return (
      <div id="search-user-profile">
        <div className="search-user-profile-name">
          <h3>Name: {fullName}</h3>
          </div>
        <div className="search-user-profile-city">
          city: {city}
          <button onClick={() => this.handlCityInputToggle()}>edit</button>
          </div>
        <div className="search-user-profile-state">
          state: {state}
          {/* <button onClick={() => this.handleStateInputToggle()}>edit</button> */}
          </div>
        <div className="search-user-profile-age">
          age: {age}
          <button onClick={() => this.handleAgeInputToggle()}>edit</button>
          </div>
        <div className="search-user-profile-bio">
          bio: {bio}
          <button onClick={() => this.handleBioInputToggle()}>edit</button>
          </div>
        <div className="search-user-profile-interests">
        interests: {interests}
        <button onClick={() => this.handleInterestsInputToggle()}>edit</button>
        </div>
        <div className="search-user-profile-music">
          music: {music}
          <button onClick={() => this.handleMusicInputToggle()}>edit</button>
         </div>
        <div className="search-user-profile-movies">
          movies: {movies}
          <button onClick={() => this.handleMovieInputToggle()}>edit</button>
         </div>
        <div className="search-user-profile-tv">
          tv: {tv}
          <button onClick={() => this.handleTvInputToggle()}>edit</button>
         </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  
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

export default connect(mapStateToProps)(UserProfile);