import React from 'react';

class LoginForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = event.target;
        console.log(email, password);
    }

    render() {
        return(
            <form 
                className="LoginForm"
                onSubmit = { this.handleSubmit }
            >
                <legend
                    id="sign-in"
                    >Sign In
                </legend>
                <div>
                    <label
                        htmlFor="LoginForm__email"
                        >Email</label>
                    <input 
                        type="text" 
                        id="LoginForm__email" 
                        name="email" 
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