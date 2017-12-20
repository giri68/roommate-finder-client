import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link, Redirect} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {getSelectedUser} from '../actions/user';
import { PulseLoader } from 'react-spinners'; 

export class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }
    
    
    onSubmit(values) {
        this.setState({ loading: true })
        return this.props.dispatch(login(values.username, values.password))
        .then(() => this.props.dispatch(getSelectedUser(values.username)))
        .then(() => this.setState({ loading: false}))
        
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
                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            id="username"
                            validate={[required, nonEmpty]}
                        />
                    </div>    
                    <div className="form-section">
                        <label htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            id="password"
                            validate={[required, nonEmpty]}
                        />
                    </div>
                    <button className="button-blue" disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                    <PulseLoader color={'#fff'} loading={this.state.loading} className="loading-graphic" />
                    
                </form>
                <p><Link className="login-link" to="/">Back</Link></p>
                <p><Link className="login-link" to="/start">Create Account</Link></p>   
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
