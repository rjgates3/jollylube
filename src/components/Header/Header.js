import React from 'react';
import { Link } from 'react-router-dom';
// import Context from '../../contexts/Context';
import TokenService from '../../services/token-services';
//import css
import './header.css';


class Header extends React.Component {

    // static contextType = Context;

    handleLogout = () => {
        TokenService.clearAuthToken();
        // this.context.handleLogout();
    };


    renderLogoutLink() {
        return(
            <div className='header__logged-in'>
                <div>
                <Link to='/myappointments'>
                    My Appointments
                </Link>
                </div>
                <div>
                <Link to='/setappointment'>
                    Set Appointment
                </Link>
                </div>
                <div>
                <Link 
                    onClick={ this.handleLogout }
                    to='/'>
                    Logout
                </Link>
                </div>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='header__logged-in'>
                <div>
                <Link to='/login'>
                    Login
                </Link>
                </div>
                <div>
                <Link to='/createaccount'>
                    Create Account
                </Link>
                </div>
            </div>
        )
    }
    
    render() {
        return (
            <nav className='header'>
                <header>
                    <h1>
                        <Link to='/'>
                            Jolly Lube
                        </Link>
                    </h1>
                </header>
                {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </nav>
        )
    }
}

export default Header;

