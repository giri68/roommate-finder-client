import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { compose } from 'redux';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import { saveQuestions } from '../actions/user';
import '../styles/questions.css'; 
import { lookupLatLong } from '../actions/user';

export class Questions extends React.Component {

  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
  }

  onSubmit(values) {
    const { firstName, lastName, age, gender, gender_bothered, city, state, max_distance,
      max_price, pets_have, pets_bothered, loud_music, loud_music_bothered, cigarettes, cigarettes_bothered,
      drinking_day_per_week, drinking_bothered, alt_smoking, alt_smoking_bothered, hour_awake, hours_bothered,
      guests_frequency, guests_bothered, cleanliness, cleanliness_bothered, address, zipcode, common_areas, common_areas_bothered } = values;
    const user = {
      firstName, lastName, age, gender, gender_bothered, city, state, max_distance,
      max_price, pets_have, pets_bothered, loud_music, loud_music_bothered, cigarettes, cigarettes_bothered,
      drinking_day_per_week, drinking_bothered, alt_smoking, alt_smoking_bothered, hour_awake, hours_bothered,
      guests_frequency, guests_bothered, cleanliness, cleanliness_bothered, address, zipcode, common_areas, common_areas_bothered
    };
    user.username = this.props.currentUser.username
    return this.props.dispatch(lookupLatLong(city, state))
    .then(() => {
      user.lat = this.props.latLong.lat
      user.long = this.props.latLong.lng
      // console.log("USER AS SUBMITTED", user)
      this.props.dispatch(saveQuestions(user))
    })
    // .then(() => this.props.history.push('/dashboard'))
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }
    if (this.props.updatedUser) {
      return <Redirect to="/dashboard"/>;
    }

    const minValue = min => value =>
      value && value < min ? `Must be at least ${min}` : undefined
    const minValue18 = minValue(18)
    const minValue1 = minValue(1)
    const minValue100 = minValue(100)

    const normalizeBoolean = value => {
      if (value === "true") {
        return true;
      }
      if (value === "false") {
        return false;
      }
      return value;
    };


    let lookingFor;
    console.log("QUESTIONS PAGE LOOKING FOR", this.props.looking_for)
    if (this.props.looking_for === "find_a_room" || this.props.looking_for === "find_a_roommate") {
      lookingFor = <div><h2>Apartment Criteria</h2>
        <label htmlFor="city">City</label>
        <Field
          component={Input}
          type="text"
          name="city"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="state">State</label>
        <Field
          component={Input}
          type="text"
          name="state"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="max_distance">Search Radius(miles)</label>
        <Field
          component={Input}
          type="number"
          name="max_distance"
          validate={[required, nonEmpty, minValue1]}
        />
        <label htmlFor="max_price">Maximum Price</label>
        <Field
          component={Input}
          type="number"
          name="max_price"
          validate={[required, nonEmpty, minValue100]}
        />
      </div>
    }
    else if (this.props.looking_for === "fill_a_room") {
      lookingFor = <div><h2>Apartment Listing</h2>
        <label htmlFor="address">Address</label>
        <Field
          component={Input}
          type="text"
          name="address"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="city">City</label>
        <Field
          component={Input}
          type="text"
          name="city"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="state">State</label>
        <Field
          component={Input}
          type="text"
          name="state"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="zipcode">Zip Code</label>
        <Field
          component={Input}
          type="number"
          name="zipcode"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="max_price">Room Price</label>
        <Field
          component={Input}
          type="number"
          name="max_price"
          validate={[required, nonEmpty]}
        />
      </div>
    }

    return (
      <div className="container">
          <h1 className="center" >Match Questions</h1>
          <p className="center" >To help us better match you with potential roommates, please tell us a little bit about yourself and what you're looking for.</p>
          <br />
        <form className="profile" onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values))}>
          <h2>Basic Info</h2>
          <label htmlFor="firstName">First Name</label>
          <Field
            component={Input}
            type="text"
            name="firstName"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="lastName">Last Name</label>
          <Field
            component={Input}
            type="text"
            name="lastName"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="age">Age</label>
          <Field
            component={Input}
            type="number"
            name="age"
            validate={[required, nonEmpty, minValue18]}
          />
          <div>
            <label>Sex</label>
            <div>
              <label>
                <Field name="gender" component="input" type="radio" value="male" />
                {' '}
                Male
              </label>
              <label>
                <Field name="gender" component="input" type="radio" value="female" />
                {' '}
                Female
              </label>
            </div>
          </div>

          {lookingFor}

          <h2>Personality Profile</h2>

          <div>
            <label>Do you own pets?</label>
            <div>
              <label>
                <Field name="pets_have" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="pets_have" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>

          <label htmlFor="pets_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't have pets?</label>
          <Field
            component={Input}
            type="number"
            name="pets_bothered"
            validate={[required, nonEmpty]}
          />

          <div>
            <label>Do you listen to loud music, tv, or movies in your living space?</label>
            <div>
              <label>
                <Field name="loud_music" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="loud_music" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>
          <label htmlFor="loud_music_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who is quiet?</label>
          <Field
            component={Input}
            type="number"
            name="loud_music_bothered"
            validate={[required, nonEmpty]}
          />

          <div>
            <label>Do you smoke cigarettes?</label>
            <div>
              <label>
                <Field name="cigarettes" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="cigarettes" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>
          <label htmlFor="cigarettes_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't smokes cigarettes?</label>
          <Field
            component={Input}
            type="number"
            name="cigarettes_bothered"
            validate={[required, nonEmpty]}
          />

          <div>
            <label>Do you consume alcohol?</label>
            <div>
              <label>
                <Field name="drinking_day_per_week" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="drinking_day_per_week" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>
          <label htmlFor="drinking_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't drink alcohol?</label>
          <Field
            component={Input}
            type="number"
            name="drinking_bothered"
            validate={[required, nonEmpty]}
          />

          <div>
            <label>Do you smoke marijuana?</label>
            <div>
              <label>
                <Field name="alt_smoking" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="alt_smoking" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>
          <label htmlFor="alt_smoking_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't smokes marijuana?</label>
          <Field
            component={Input}
            type="number"
            name="alt_smoking_bothered"
            validate={[required, nonEmpty]}
          />

          <div>
            <label>Are you awake at odd hours of the morning/evening?</label>
            <div>
              <label>
                <Field name="hour_awake" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="hour_awake" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>
          <label htmlFor="hours_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who is on a 9-5 schedule?</label>
          <Field
            component={Input}
            type="number"
            name="hours_bothered"
            validate={[required, nonEmpty]}
          />

          <div>
            <label>Do you have guests over frequently, including but not limited to, significant others?</label>
            <div>
              <label>
                <Field name="guests_frequency" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="guests_frequency" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>
          <label htmlFor="guests_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't have guests over?</label>
          <Field
            component={Input}
            type="number"
            name="guests_bothered"
            validate={[required, nonEmpty]}
          />

          <div>
            <label>Would you consider yourself a slob? (Be honest!)</label>
            <div>
              <label>
                <Field name="cleanliness" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="cleanliness" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>
          <label htmlFor="cleanliness_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who is clean?</label>
          <Field
            component={Input}
            type="number"
            name="cleanliness_bothered"
            validate={[required, nonEmpty]}
          />
          <div>
            <label>Do you spend a lot of time in common areas such as the kitchen and living room?</label>
            <div>
              <label>
                <Field name="common_areas" component="input" type="radio" value="true" />
                {' '}
                Yes
              </label>
              <label>
                <Field name="common_areas" component="input" type="radio" value="false" />
                {' '}
                No
              </label>
            </div>
          </div>
          <label htmlFor="common_areas_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who keeps to themself?</label>
          <Field
            component={Input}
            type="number"
            name="common_areas_bothered"
            validate={[required, nonEmpty]}
          />
          <label htmlFor="gender_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone of the same sex?</label>
          <Field
            component={Input}
            type="number"
            name="gender_bothered"
            validate={[required, nonEmpty]}
          />
          <button
            type="submit"
            className="button-blue"
            disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
  looking_for: state.user.looking_for,
  latLong: state.user.latLong,
  updatedUser: state.auth.updatedUser
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'questions',
    onSubmitFail: (errors, dispatch) => dispatch(focus('questions'))
  }))(Questions)
