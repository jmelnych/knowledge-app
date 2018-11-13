import React, {Component} from 'react';
import Email from './Inputs/Email'
import {isValidEmail} from './Inputs/formValidator'
import Password from "./Inputs/Password";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isValidEmail: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email) {
            this.setState({
                isValidEmail:isValidEmail(this.state.email)
            })
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit() {
        const {isValidEmail} = this.state;
        if (isValidEmail === true) {
            //TODO: send email and password to back end, receive answer and based on that login user or show
            this.setState({
                email: '',
                password: '',
                isValidEmail: false
            });
            alert('Logging in...');
        } else {
            alert ('Login and password incorrect');
        }
    }

    render() {
        return (
            <div id="loginForm">
                <div className="modal">
                    <a href="#" className="modal__close">X</a>
                    <form className="flex-col">
                        <fieldset className="flex-col">
                            <legend>Log in</legend>
                            <Email handleChange={this.handleChange}
                                   message={this.state.isValidEmail}
                                   email={this.state.email}/>
                            <Password handleChange={this.handleChange}
                                    password={this.state.password}/>
                        </fieldset>
                        <a href="#restorePasswordForm">Forgot your password?</a>
                        <button type="submit" onClick={this.handleSubmit}>Log in</button>
                        <p>Don't have account? <a href="#signUpForm"> Sign up</a></p>
                    </form>

                </div>
            </div>
        );
    }
}

export default Login;