import React from 'react';

//import Components
import Registration from '../../components/Registeration/Registration'

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
                <Registration />
            </div>
        )
    }
}

export default RegistrationPage;