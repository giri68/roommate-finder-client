import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Input from './input';
import {Field, reduxForm, focus} from 'redux-form';
import { compose } from 'redux';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export class Questions extends React.Component {

  onSubmit(values) {
    const {firstName, lastName} = values;
    const user = {firstName, lastName};
    // return this.props.dispatch(saveQuestions(user))
    //     .then(() => this.props.dispatch(login(username, password)));
  }

  render() {

    const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
  const minValue18 = minValue(18)
  const minValue1 = minValue(1)
  const minValue100= minValue(100)

      return (
          <form className="profile" onSubmit={values => this.onSubmit(values)}>
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
              type="yes/no"
              name="pets"
              validate={[required, nonEmpty, minValue100]}
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

export default compose(
  connect(),
  reduxForm({form: 'questions',
  onSubmitFail: (errors, dispatch) => dispatch(focus('questions'))
}))(Questions)
