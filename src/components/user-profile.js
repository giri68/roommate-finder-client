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

 
  handleFormSubmit(event, nextField) {
    event.preventDefault();
    console.log('testing value', this.city.value)
    

    const user = {
      // city: '',
      // state:'',
      // // age: '',
      // // bio: '',
      // // interests: '',
      // // music: '',
      // // movie: '',
      // // tv: ''
    }
    user[nextField] = this[nextField].value
    // user.city = this.inputCity.value
    // user.state = this.inputState.value
    console.log('inut ciry', this.city.value, user);
    console.log('this', this.props)
    this.props.dispatch(saveQuestions(user))
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
      state = <form onSubmit={e => this.handleFormSubmit(e)}>
        <input className="input" ref={input => this.inputState = input}></input>
        <button type="submit">save</button>
      </form>

    } else {
      state = <div>
        {this.props.state}
        <button onClick={() => this.handleStateInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.ageInputDisplayed) {
      age = <form onSubmit={e => this.handleFormSubmit(e)}>
        <input className="input" ref={input => this.inputAge = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      age = <div>
        {this.props.age}
        <button onClick={() => this.handleAgeInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.bioInputDisplayed) {
      bio = <form onSubmit={e => this.handleFormSubmit(e)}>
        <input className="input" ref={input => this.inputBio = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      bio = <div>
        {this.props.bio}
        <button onClick={() => this.handleBioInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.interestsInputDisplayed) {
      interests = <form onSubmit={e => this.handleFormSubmit(e)}>
        <input className="input" ref={input => this.inputInterests = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      interests = <div>
        {this.props.interests}
        <button onClick={() => this.handleInterestsInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.movieInputDislayed) {
      movies = <form onSubmit={e => this.handleFormSubmit(e)}>
        <input className="input" ref={input => this.inputMovie = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      movies = <div>
        {this.props.movies}
        <button onClick={() => this.handleMovieInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.musicInputDisplayed) {
      music = <form onSubmit={e => this.handleFormSubmit(e)}>
        <input className="input" ref={input => this.inputMusic = input}></input>
        <button type="submit">save</button>
      </form>
    } else {
      music = <div>
        {this.props.music}
        <button onClick={() => this.handleMusicInputToggle()}>edit</button>
      </div>;
    }
    if (this.state.tvInputDisplayed) {
      tv = <form onSubmit={e => this.handleFormSubmit(e)}>
        <input className="input" ref={input => this.inputTv = input}></input>
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

export const mapStateToProps = state => {
  console.log(state)
  {
  // firstName: state.auth.currentUser.firstName,
  // lastName: state.auth.currentUser.lastName,
  // city: state.auth.currentUser.city,
  // state: state.auth.currentUser.state,
  // age: state.auth.currentUser.age,
  // bio: state.auth.currentUser.bio,
  // interests: state.auth.currentUser.interests,
  // music: state.auth.currentUser.music,
  // movies: state.auth.currentUser.movies,
  // tv: state.auth.currentUser.tv
}};

export default connect(mapStateToProps)(UserProfile);