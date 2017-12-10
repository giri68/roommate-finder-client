import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Redirect} from 'react-router-dom';
import Input from './input';
import {Field, reduxForm, focus} from 'redux-form';
import { compose } from 'redux';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import {saveQuestions} from '../actions/user';

export class Questions extends React.Component {

    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
    }

    onSubmit(values) {
        const {firstName, lastName, age, gender, gender_bothered, city, state, max_distance, 
        max_price, pets_have, pets_bothered, loud_music, loud_music_bothered, cigarettes, cigarettes_bothered, 
        drinking_day_per_week, drinking_bothered, alt_smoking, alt_smoking_bothered, hour_awake, hours_bothered,
        guests_frequency, guests_bothered, cleanliness, cleanliness_bothered} = values;
        const user = {firstName, lastName, age, gender, gender_bothered, city, state, max_distance, 
        max_price, pets_have, pets_bothered, loud_music, loud_music_bothered, cigarettes, cigarettes_bothered, 
        drinking_day_per_week, drinking_bothered, alt_smoking, alt_smoking_bothered, hour_awake, hours_bothered,
        guests_frequency, guests_bothered, cleanliness, cleanliness_bothered};
        user.username = this.props.currentUser.username
        console.log(user)
        return this.props.dispatch(saveQuestions(user))
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/login" />;
        }

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
            <label>
            <Field
                component={Input}
                type="radio"
                name="gender"
                value="male"
            />Male</label>
            <label>
            <Field
                component={Input}
                type="radio"
                name="gender"
                value="female"
            />Female</label>
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
            <h1>Personality Profile</h1>
            <label htmlFor="pets_have">Do you have pets?</label>
            <Field
                component={Input}
                type="text"
                name="pets_have"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="pets_bothered">How likely are you to live with someone who had pets?</label>
            <Field
                component={Input}
                type="number"
                name="pets_bothered"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="loud_music">Do you listen to loud music in your living space?</label>
            <Field
                component={Input}
                type="text"
                name="loud_music"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="loud_music_bothered">How likely are you to live with someone who listens to loud music?</label>
            <Field
                component={Input}
                type="number"
                name="loud_music_bothered"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="cigarettes">Do you smoke cigarettes?</label>
            <Field
                component={Input}
                type="text"
                name="cigarettes"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="cigarettes_bothered">How likely are you to live with someone who smokes cigarettes?</label>
            <Field
                component={Input}
                type="number"
                name="cigarettes_bothered"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="drinking_day_per_week">Do you consume alcohol?</label>
            <Field
                component={Input}
                type="text"
                name="drinking_day_per_week"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="drinking_bothered">How likely are you to live with someone who consumes alcohol?</label>
            <Field
                component={Input}
                type="number"
                name="drinking_bothered"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="alt_smoking">Do you smoke marijuana?</label>
            <Field
                component={Input}
                type="text"
                name="alt_smoking"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="alt_smoking_bothered">How likely are you to live with someone who smokes marijuana?</label>
            <Field
                component={Input}
                type="number"
                name="alt_smoking_bothered"
                validate={[required, nonEmpty]}
            />
                        <label htmlFor="hour_awake">Are you up at odd hours of the night/morning?</label>
            <Field
                component={Input}
                type="text"
                name="hour_awake"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="hours_bothered">How likely are you to live with someone who is awake at odd hours of the day?</label>
            <Field
                component={Input}
                type="number"
                name="hours_bothered"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="guests_frequency">Do you have guests over frequently, including, but not limited to significant others? </label>
            <Field
                component={Input}
                type="text"
                name="guests_frequency"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="guests_bothered">How likely are you to live with someone who has guests over frequently?</label>
            <Field
                component={Input}
                type="number"
                name="guests_bothered"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="cleanliness">On a scale from 1-5, how clean are you, 5 being very clean.  </label>
            <Field
                component={Input}
                type="number"
                name="cleanliness"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="cleanliness_bothered">How likely are you to live with someone who has guests over frequently?</label>
            <Field
                component={Input}
                type="number"
                name="cleanliness_bothered"
                validate={[required, nonEmpty]}
            />
            <label htmlFor="gender_bothered">How likely are you to live with someone of the opposite sex?</label>
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
        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default compose(
    connect(mapStateToProps),
    reduxForm({form: 'questions',
    onSubmitFail: (errors, dispatch) => dispatch(focus('questions'))
}))(Questions)
