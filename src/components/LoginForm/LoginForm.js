import React from 'react';
import { Input, Required } from '../Utils/Utils';
import TokenService from '../../services/token-services'
import AuthApiService from '../../services/auth-api-service';
import Context from '../../contexts/Context';

class LoginForm extends React.Component {

    static contextType = Context;

    state = { error: null }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ error: null })
        const { user_name, password } = event.target
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then( res => {
                TokenService.saveAuthToken(res.authToken)
                this.context.setLoggedIn()
                this.props.history.push('/myappointments')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const error = this.state.error
        return(
            <form 
                className="login"
                onSubmit = { this.handleSubmit }>
                <legend
                    id="sign-in">
                    Login
                </legend>
                <div className = "error">
                    { error }
                </div>
                <div className='form-element'>
                    <label
                        htmlFor="LoginForm__user_name">
                        Email <Required />
                    </label>
                    <Input
                        name='user_name'
                        type="text"
                        required
                        id="LoginForm__user_name"
                        placeholder="Enter your email:"
                    ></Input>
                </div>
                <div className='form-element'>
                    <label 
                        htmlFor="LoginForm__password">
                        Password <Required />
                    </label>
                    <Input
                        name="password"
                        type="password"
                        required 
                        id="LoginForm__password" 
                        placeholder="Password"
                    ></Input>
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

export default LoginForm;