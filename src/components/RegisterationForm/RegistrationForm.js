import React from 'react';
import { Input, Required } from '../Utils/Utils';
import TokenService from '../../services/token-services';
import AuthApiService from '../../services/auth-api-service';

import Context from '../../contexts/Context';
class Registration extends React.Component {

    static contextType = Context;

    handleSubmit = event => {
        event.preventDefault();
        this.context.setLoginError(null);
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
                    user_name.value = '';
                    full_name.value = '';
                    password.value = '';
                    TokenService.saveAuthToken(res.authToken);
                    this.props.history.push('/myappointments');
                })
                .catch(res => {
                    this.context.setLoginError(res.error)
                })
    }


    render() {
        const error = this.context.loginError
        return(
            <form 
                className='RegistrationForm' 
                onSubmit={ this.handleSubmit }>
                <legend 
                    className='create-account'>
                    Create an Account
                </legend>
                <div role='alert'>
                    { error && <p className='red'>{ error }</p> }
                </div>
                <div className='full_name'>
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
                <div className='user_name'>
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
                <div className='password'>
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
                <div>
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