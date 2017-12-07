import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Input from './input';
import {Field, reduxForm, focus} from 'redux-form';
import { compose } from 'redux';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import {saveQuestions} from '../actions/user';

export class Questions extends React.Component {

  onSubmit(values) {
    const {firstName, lastName, age, gender, city, state, searchRadius, 
      maxPrice, pets, pets2, music, music2, cigarettes, cigarettes2, alcohol, alcohol2, marijuana, 
      marijuana2, sleep, sleep2, guests, guests2, clean, clean2} = values;
    const user = {firstName, lastName, age, gender, city, state, searchRadius, 
      maxPrice, pets, pets2, music, music2, cigarettes, cigarettes2, alcohol, alcohol2, marijuana, 
      marijuana2, sleep, sleep2, guests, guests2, clean, clean2};
      user.username = this.props.currentUser.username
      console.log(user)
    return this.props.dispatch(saveQuestions(user))
  }

  render() {

    const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
  const minValue18 = minValue(18)
  const minValue1 = minValue(1)
  const minValue100= minValue(100)

      return (
          <form className="profile" onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}>
          <p>To help us better match you with potential roommates, please tell us a little bit about yourself and what you're looking for.</p>
          <h1>Basic Info</h1>
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
                    <label htmlFor="gender">Gender</label>
          <Field
              component={Input}
              type="text"
              name="gender"
              validate={[required, nonEmpty, minValue18]}
          />
          <h1>Apartment Criteria</h1>
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
          <label htmlFor="searchRadius">Search Radius(miles)</label>
          <Field
              component={Input}
              type="number"
              name="searchRadius"
              validate={[required, nonEmpty, minValue1]}
          />
           <label htmlFor="maxPrice">Maximum Price</label>
          <Field
              component={Input}
              type="number"
              name="maxPrice"
              validate={[required, nonEmpty, minValue100]}
          />
          <h1>Personality Profile</h1>
           <label htmlFor="pets">Do you have pets?</label>
          <Field
              component={Input}
              type="text"
              name="pets"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="pets2">How likely are you to live with someone who had pets?</label>
          <Field
              component={Input}
              type="number"
              name="pets2"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="music">Do you listen to loud music in your living space?</label>
          <Field
              component={Input}
              type="text"
              name="music"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="music2">How likely are you to live with someone who listens to loud music?</label>
          <Field
              component={Input}
              type="number"
              name="music2"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="cigarettes">Do you smoke cigarettes?</label>
          <Field
              component={Input}
              type="text"
              name="cigarettes"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="cigarettes2">How likely are you to live with someone who smokes cigarettes?</label>
          <Field
              component={Input}
              type="number"
              name="cigarettes2"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="alcohol">Do you consume alcohol?</label>
          <Field
              component={Input}
              type="text"
              name="alcohol"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="alcohol2">How likely are you to live with someone who consumes alcohol?</label>
          <Field
              component={Input}
              type="number"
              name="alcohol2"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="marijuana">Do you smoke marijuana?</label>
          <Field
              component={Input}
              type="text"
              name="marijuana"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="marijuana2">How likely are you to live with someone who smokes marijuana?</label>
          <Field
              component={Input}
              type="number"
              name="marijuana2"
              validate={[required, nonEmpty]}
          />
                    <label htmlFor="sleep">Are you up at odd hours of the night/morning?</label>
          <Field
              component={Input}
              type="text"
              name="sleep"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="sleep2">How likely are you to live with someone who is awake at odd hours of the day?</label>
          <Field
              component={Input}
              type="number"
              name="sleep2"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="guests">Do you have guests over frequently, including, but not limited to significant others? </label>
          <Field
              component={Input}
              type="text"
              name="guests"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="guests2">How likely are you to live with someone who has guests over frequently?</label>
          <Field
              component={Input}
              type="number"
              name="guests2"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="clean">On a scale from 1-5, how clean are you, 5 being very clean.  </label>
          <Field
              component={Input}
              type="number"
              name="clean"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="clean2">How likely are you to live with someone who has guests over frequently?</label>
          <Field
              component={Input}
              type="number"
              name="clean2"
              validate={[required, nonEmpty]}
          />
          <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}>
              Submit
          </button>
      </form>
      );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'questions',
  onSubmitFail: (errors, dispatch) => dispatch(focus('questions'))
}))(Questions)
