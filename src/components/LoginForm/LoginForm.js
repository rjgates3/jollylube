import React from 'react';
import TokenService from '../../services/token-services'
import AuthApiService from '../../services/auth-api-service';
import Context from '../../contexts/Context';


class LoginForm extends React.Component {

    static contextType = Context;

    // static defaultProps = {
    //     onLoginSuccess: () => {}
    // }

    // state = {
    //     error: null
    // }

    handleSubmit = event => {
        event.preventDefault();
        this.context.setLoginError(null)
        const { user_name, password } = event.target
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then( res => {
                user_name.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken)
                this.context.handleLogin();
                this.props.history.push('/myappointments')
            })
            .catch(res => {
                this.context.setLoginError(res.error)
            })
    }

    render() {
        const error = this.context.loginError
        return(
            <form 
                className="LoginForm"
                onSubmit = { this.handleSubmit }
            >
                <div role='alert'>
                    {error && <p className='red'>{ error }</p>}
                </div>
                <legend
                    id="sign-in"
                    >Sign In
                </legend>
                <div>
                    <label
                        htmlFor="LoginForm__user_name"
                        >Email</label>
                    <input 
                        type="text" 
                        id="LoginForm__user_name" 
                        name="user_name" 
                        placeholder="Enter your email:"
                    ></input>
                </div>
                <div>
                    <label 
                        htmlFor="LoginForm__password"
                    >Password</label>
                    <input 
                        type="text" 
                        id="LoginForm__password" 
                        name="password"
                        placeholder="Password"
                    ></input>
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

export default LoginForm;