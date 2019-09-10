import React from 'react';

//import Components
import RegistrationForm from '../../components/RegisterationForm/RegistrationForm'

//import css
import './registration.css'

class RegistrationPage extends React.Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <div>    
                <RegistrationForm />
            </div>
        )
    }
}

export default RegistrationPage;