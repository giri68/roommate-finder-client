import React from 'react';
import { connect } from 'react-redux';
import { saveQuestions } from '../actions/user';


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
}
 
  handleFormSubmit(event, nextField) {
    event.preventDefault();
    //console.log('testing value', this.city.value)
    //console.log('this.city', this.props.firstName);

    const user = {}
    user[nextField] = this[nextField].value
    // user.city = this.city.value
    // user.state = this.inputState.value
    user.username = this.props.username
    //console.log('inut city', this.city.value, user);
    //console.log('this', this.props)
    //console.log('user', user.movies)
    this.props.dispatch(saveQuestions(user))
    this.closeForm()
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
    var state, city, age, movies, music, tv, interests, bio, field, nextField;
   

    if (this.state.cityInputDisplayed) {
      nextField = 'city'
      city = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.city = input}></input>
        <button type="submit">save</button>
     
      </form>
         
        
    } else {
      city = <div>{this.props.city}
        <button onClick={() => this.handlCityInputToggle()}>edit</button>
      </div>
    }
    if (this.state.stateInputDisplayed) {
      nextField = 'state'
      state = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.state = input}></input>
        <button type="submit">save</button>
      </form>

    } else {
      state = <div>
        {this.props.state}
        <button onClick={() => this.handleStateInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.ageInputDisplayed) {
      nextField = 'age'
      age = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.age = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      age = <div>
        {this.props.age}
        <button onClick={() => this.handleAgeInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.bioInputDisplayed) {
      nextField = 'bio'
      bio = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.bio = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      bio = <div>
        {this.props.bio}
        <button onClick={() => this.handleBioInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.interestsInputDisplayed) {
      nextField = 'interests'
      interests = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.interests = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      interests = <div>
        {this.props.interests}
        <button onClick={() => this.handleInterestsInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.movieInputDislayed) {
      nextField = 'movies'
      movies = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.movies = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      movies = <div>
        {this.props.movies}
        <button onClick={() => this.handleMovieInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.musicInputDisplayed) {
      nextField = 'music'
      music = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.music = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      music = <div>
        {this.props.music}
        <button onClick={() => this.handleMusicInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.tvInputDisplayed) {
      nextField = 'tv'
      tv = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" ref={input => this.tv = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      tv = <div>
        {this.props.tv}
        <button onClick={() => this.handleTvInputToggle()}>edit</button>
      </div>;
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

