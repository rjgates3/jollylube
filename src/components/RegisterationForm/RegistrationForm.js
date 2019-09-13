import React from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service'

class Registration extends React.Component {


    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = event => {
        event.preventDefault();
        const { full_name, user_name, password } = event.target;

        this.setState({
            error: null
        });

        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value
        })
        .then(user => {
            user_name.value = ''
            full_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
        })
        .catch(res => {
            this.setState({
                error: res.error
            });
        });
    }


    render() {
        return(
            <form 
                className='RegistrationForm' 
                onSubmit={ this.handleSubmit }>
                <legend 
                    className='create-account'>
                    Create an Account
                </legend>
                <div role='alert'>
                    {/* { error && <p className='red'>{ error }</p> } */}
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
                        id='RegistrationForm__password'>
                    </Input>
                </div>
                <Button type='submit'>
                    Sign Up
                </Button>
            </form>
        )
    }
}

export default Registration