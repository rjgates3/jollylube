import React from 'react';

//import required components
import LoginForm from '../../components/LoginForm/LoginForm'

//import css
import './loginpage.css'

class LoginPage extends React.Component {

    render() {

        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage;