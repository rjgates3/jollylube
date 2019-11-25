import React from 'react';
import { Input, Required } from '../Utils/Utils';
import TokenService from '../../services/token-services';
import AuthApiService from '../../services/auth-api-service';

import Context from '../../contexts/Context';

class Registration extends React.Component {

    static contextType = Context;

    state = { error: null }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ error: null });
        const { full_name, user_name, password } = event.target;

        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value
        })
            .then(() => 
            AuthApiService.postLogin({
                user_name: user_name.value,
                password: password.value
            }))
                .then(res => {
                    TokenService.saveAuthToken(res.authToken);
                    this.context.setLoggedIn();
                    this.props.history.push('/myappointments');
                })
                .catch(res => {
                    this.setState({ error: res.error })
                })
    }


    render() {
        const error = this.state.error
        return(
            <form 
                className='Registration' 
                onSubmit={ this.handleSubmit }>
                <legend 
                    className='create-account'>
                    Create Account
                </legend>
                <div className = "error">
                    { error }
                </div>
                <div className='form-element'>
                    <label
                        htmlFor='RegistrationForm__full_name'>
                        Full Name <Required />
                    </label>
                    <Input
                        name='full_name'
                        type='text'
                        required
                        id='RegistrationForm__full_name' 
                        placeholder='Enter your full name:'>
                    </Input>
                </div>
                <div className='form-element'>
                    <label
                        htmlFor='RegistrationForm__user_name'>
                        Email <Required />
                    </label>
                    <Input
                        name='user_name'
                        type='text'
                        required
                        id='RegistrationForm__user_name'
                        placeholder='Enter your email:'>
                    </Input>
                </div>
                <div className='form-element'>
                    <label
                        htmlFor='RegistrationForm__password'>
                        Password <Required />
                    </label>
                    <Input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm__password'
                        placeholder='Password'>
                    </Input>
                </div>
                <div className='form-element'>
                    <input 
                        type="submit"
                        name="submit"
                        id="submit"
                        value="Sign In"
                    ></input>
                </div>
            </form>
        )
    }
}

export default Registration