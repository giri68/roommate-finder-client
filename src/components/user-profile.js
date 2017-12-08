import React from 'react';
import { connect } from 'react-redux';

export class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInputDisplayed: false,
      stateInputDisplayed: false,
      ageInputDisplayed: false,
      bioInputDisplayed: false,
      interestsInputDisplayed: false,
      musicInputDisplayed: false,
      movieInputDislayed: false,
      tvInputDisplayed: false
    }
  }

  
  handlCityInputToggle() {
    this.setState({ cityInputDisplayed: !this.state.cityInputDisplayed })
  }
  handleStateInputToggle() {
    this.setState({ stateInputDisplayed: !this.state.stateInputDisplayed })
  }
  handleAgeInputToggle() {
    this.setState({ ageInputDisplayed: !this.state.ageInputDisplayed })
  }
  handleBioInputToggle() {
    this.setState({ bioInputDisplayed: !this.state.bioInputDisplayed })
  }
  handleInterestsInputToggle() {
    this.setState({ interestsInputDisplayed: !this.state.interestsInputDisplayed })
  }
  handleMusicInputToggle() {
    this.setState({ musicInputDisplayed: !this.state.musicInputDisplayed })
  }
  handleMovieInputToggle() {
    this.setState({ movieInputDislayed: !this.state.movieInputDislayed })
  }
  handleTvInputToggle() {
    this.setState({ tvInputDisplayed: !this.state.tvInputDisplayed })
  }

  render() {
    var state, city, age, movies, music, tv, interests, bio;
    
    if (this.state.cityInputDisplayed) {
      city = <form onSubmit={(e) => e.preventDefault()}><input className="input"></input><button>save</button></form>
    } else {
      city = <div>{this.props.city}<button onClick={() => this.handlCityInputToggle()}>edit</button></div>
    }
    if (this.state.stateInputDisplayed) {
      state = <form onSubmit={(e) => e.preventDefault()}><input className="input"></input><button>save</button></form>

    } else {
      state = <div>{this.props.state}<button onClick={() => this.handleStateInputToggle()}>edit</button></div>;
    }
    if (this.state.ageInputDisplayed) {
      age = <form onSubmit={(e) => e.preventDefault()}><input className="input"></input><button>save</button></form>
    } else {
      age = <div>{this.props.age} <button onClick={() => this.handleAgeInputToggle()}>edit</button></div>;
    }
    if (this.state.bioInputDisplayed) {
      bio = <form onSubmit={(e) => e.preventDefault()}><input className="input"></input><button>save</button></form>
    } else {
      bio = <div>{this.props.bio}<button onClick={() => this.handleBioInputToggle()}>edit</button></div>;
    }
    if (this.state.interestsInputDisplayed) {
      interests = <form onSubmit={(e) => e.preventDefault()}><input className="input"></input><button>save</button></form>
    } else {
      interests = <div>{this.props.interests}<button onClick={() => this.handleInterestsInputToggle()}>edit</button></div>;
    }
    if (this.state.movieInputDislayed) {
      movies = <form onSubmit={(e) => e.preventDefault()}><input className="input"></input><button>save</button></form>
    } else {
      movies = <div>{this.props.movies}<button onClick={() => this.handleMovieInputToggle()}>edit</button></div>;
    }
    if (this.state.musicInputDisplayed) {
      music = <form onSubmit={(e) => e.preventDefault()}><input className="input"></input><button>save</button></form>
    } else {
      music = <div>{this.props.music}<button onClick={() => this.handleMusicInputToggle()}>edit</button></div>;
    }
    if (this.state.tvInputDisplayed) {
      tv = <form onSubmit={(e) => e.preventDefault()}><input className="input"></input><button>save</button></form>
    } else {
      tv = <div>{this.props.tv} <button onClick={() => this.handleTvInputToggle()}>edit</button></div>;
    }

    var fullName = `${this.props.firstName} ${this.props.lastName}`;
    return (
      <div id="search-user-profile">
        <div className="search-user-profile-name">
          <h3>Name: {fullName}</h3>
        </div>
        <div className="search-user-profile-city">
          city: {city}
        </div>
        <div className="search-user-profile-state">
          state: {state}
        </div>
        <div className="search-user-profile-age">
          age: {age}
        </div>
        <div className="search-user-profile-bio">
          bio: {bio}
        </div>
        <div className="search-user-profile-interests">
          interests: {interests}
        </div>
        <div className="search-user-profile-music">
          music: {music}
        </div>
        <div className="search-user-profile-movies">
          movies: {movies}
        </div>
        <div className="search-user-profile-tv">
          tv: {tv}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({

  firstName: state.auth.currentUser.firstName ? state.auth.currentUser.firstName : null,
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