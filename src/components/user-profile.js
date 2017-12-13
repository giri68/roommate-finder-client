import React from 'react';
import { connect } from 'react-redux';
import { saveQuestions } from '../actions/user';
import '../styles/profile.css';

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
      tvInputDisplayed: false,
    }
    // this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
closeForm(){
  console.log(this)
  this.setState({
    cityInputDisplayed: false,
    stateInputDisplayed: false,
    ageInputDisplayed: false,
    bioInputDisplayed: false,
    interestsInputDisplayed: false,
    musicInputDisplayed: false,
    movieInputDislayed: false,
    tvInputDisplayed: false
  })
  console.log(this)
}
 
  handleFormSubmit(event, nextField) {
    event.preventDefault();
    //console.log('testing value', this.city.value)
    //console.log('this.city', this.props.firstName);

    const user = {}


    user[nextField] = this[nextField].value
    console.log(this)
    // user[nextField] = this.refs[nextField].value


    user.username = this.props.username
    //console.log('inut city', this.city.value, user);
    //console.log('this', this.props)
    //console.log('user', user.movies)
    this.props.dispatch(saveQuestions(user))

    // let capitalizedNext = `${nextField.charAt(0).toUpperCase()}()`;  

    // console.log("THIS IS CAPITALIZEDNEXT: ",  capitalizedNext); 
    // let funcName = `handle${capitalizedNext}InputToggle`; 
    // this.props.dispatch(funcName)
    this.closeForm(); 
  }

  handleCityInputToggle() {
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
    var state, city, age, movies, music, tv, interests, bio, field, nextField;
   

    if (this.state.cityInputDisplayed) {
      nextField = 'city'
      city = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.city = input}></input>
        <button className="buttonEdit" type="submit">save</button>
      </form>
         
        
    } else {
      city = <div>
        <p>City: {this.props.city}</p>
        <button onClick={() => this.handleCityInputToggle()}>edit</button>
      </div>
    }
    if (this.state.stateInputDisplayed) {
      nextField = 'state'
      state = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.state = input}></input>
        <button className="buttonEdit" type="submit">save</button>
      </form>

    } else {
      state = <div>
        <p>State: {this.props.state}</p>
        <button onClick={() => this.handleStateInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.ageInputDisplayed) {
      nextField = 'age'
      age = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.age = input}></input>
        <button className="buttonEdit" type="submit">save</button>
      </form>
    } else {
      age = <div>
        <p>Age: {this.props.age}</p>
        <button onClick={() => this.handleAgeInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.bioInputDisplayed) {
      nextField = 'bio'
      bio = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.bio = input}></input>
        <button className="buttonEdit" type="submit">save</button>
      </form>
    } else {
      bio = <div>
        <p>Bio: {this.props.bio}</p>
        <button onClick={() => this.handleBioInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.interestsInputDisplayed) {
      nextField = 'interests'
      interests = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.interests = input}></input>
        <button className="buttonEdit" type="submit">save</button>
      </form>
    } else {
      interests = <div>
        <p>Interests: {this.props.interests}</p>
        <button onClick={() => this.handleInterestsInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.movieInputDislayed) {
      nextField = 'movies'
      movies = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.movies = input}></input>
        <button className="buttonEdit" type="submit">save</button>
      </form>
    } else {
      movies = <div>
        <p>Movies: {this.props.movies}</p>
        <button onClick={() => this.handleMovieInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.musicInputDisplayed) {
      nextField = 'music'
      music = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.music = input}></input>
        <button className="buttonEdit" type="submit">save</button>
      </form>
    } else {
      music = <div>
        <p>Music: {this.props.music}</p>
        <button onClick={() => this.handleMusicInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.tvInputDisplayed) {
      nextField = 'tv'
      tv = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.tv = input}></input>
        <button className="buttonEdit" type="submit">save</button>
      </form>
    } else {
      tv = <div>
        <p>TV: {this.props.tv}</p>
        <button onClick={() => this.handleTvInputToggle()}>edit</button>
      </div>;
    }

    var fullName = `${this.props.firstName} ${this.props.lastName}`;
    return (
      <div className="search-user-profile">
        <div className="profile-picture">
        </div>
        <div className="right-section">
          <div className="search-user-profile-name">
            <h2>{fullName}</h2>
          </div>
          <div className="search-user-profile-city">
            {city}
          </div>
          <div className="search-user-profile-state">
            {state}
          </div>
          <div className="search-user-profile-age">
            {age}
          </div>
          <div className="search-user-profile-bio">
            {bio}
          </div>
          <div className="search-user-profile-interests">
            {interests}
          </div>
          <div className="search-user-profile-music">
            {music}
          </div>
          <div className="search-user-profile-movies">
            {movies}
          </div>
          <div className="search-user-profile-tv">
            {tv}
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  console.log('state12344', state)
  return {
   firstName: state.auth.currentUser ? state.auth.currentUser.firstName : null,
  lastName: state.auth.currentUser ? state.auth.currentUser.lastName : null,
  city: state.auth.currentUser ? state.auth.currentUser.city : null,
  state: state.auth.currentUser ? state.auth.currentUser.state : null,
  age: state.auth.currentUser ? state.auth.currentUser.age : null,
  bio: state.auth.currentUser ? state.auth.currentUser.bio : null,
  interests: state.auth.currentUser ? state.auth.currentUser.interests : null,
  music: state.auth.currentUser ? state.auth.currentUser.music : null,
  movies: state.auth.currentUser ? state.auth.currentUser.movies : null,
  tv: state.auth.currentUser ? state.auth.currentUser.tv : null,
  username: state.auth.currentUser ? state.auth.currentUser.username : null
}};

export default connect(mapStateToProps)(UserProfile);

