import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-services';

//import css
import './header.css';


class Header extends React.Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }

    renderIfLoggedinLink() {
        return(
            <div className='header__logged-in'>
                <div>
                <Link to='/myappointments/123'>
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
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
                </div>
            </div>
        )
    }

    renderIfLoggedoutLink() {
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
                ? this.renderIfLoggedinLink()
                : this.renderIfLoggedoutLink()}
            </nav>
        )
    }
}

export default Header;

