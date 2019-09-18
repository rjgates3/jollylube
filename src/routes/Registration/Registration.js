import React from 'react';

//import Components
import RegistrationForm from '../../components/RegisterationForm/RegistrationForm'

//import css
import './registration.css'

class RegistrationPage extends React.Component {

    render() {
        return (
            <div>    
                <RegistrationForm />
            </div>
        )
    }
}

export default RegistrationPage;