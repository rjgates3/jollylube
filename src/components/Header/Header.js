import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-services';

// import nav bar commponents
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'

//import css
import './header.css';

import Context from '../../contexts/Context'


class Header extends React.Component {

    static contextType = Context;

    handleLogout = () => {
        TokenService.clearAuthToken();
        this.context.setLoggedIn();
    };

    renderLogoutLink() {
        return(
            <ul>
                <li>
                    <Link 
                        to='/myappointments' 
                        className='menu'>
                        My Appointments
                    </Link>
                </li>
            
                <li>
                    <Link 
                        to='/setappointment' 
                        className='menu'>
                        Set Appointment
                    </Link>
                </li>

                <li>
                    <Link 
                        onClick={ this.handleLogout }
                        to='/'
                        className='menu'>
                        Logout
                    </Link>
                </li>
            </ul>
        )
    }

    renderLoginLink() {
        return (
            <ul>
                <li>
                    <Link
                        to='/login'
                        className='menu'>
                        Login
                    </Link>
                </li>
            
                <li>
                    <Link 
                        to='/createaccount'
                        className='menu'>
                        Create Account
                    </Link>
                </li>

            </ul>
        )
    }
    
    render() {
        return (
            <header className='toolbar'>

                <nav className='toolbar__navigation'>

                    <div className='toolbar__toggle-button'>
                        <DrawerToggleButton />
                    </div>

                    <div className='toolbar__logo'>
                        <Link
                            to='/'
                            className='logo'>
                            <i className="fas fa-oil-can">  Jolly Lube</i>
                        </Link>
                    </div>

                    <div className='spacer'></div>

                    <div className='toolbar__navigation__items'>
                        {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}
                    </div>

                </nav>

            </header>
        )
    }
}

export default Header;

