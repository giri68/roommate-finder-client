import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link, Redirect} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="limited-width">
                <h1>Login</h1>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                    <button className="button-blue" disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                    
                </form>
                <p><Link className="login-link" to="/">Back</Link></p>
                <p><Link className="login-link" to="/searchPage">Create Account</Link></p>   
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default compose(
    connect(mapStateToProps),
    reduxForm({ form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')) 
}))(LoginForm);
