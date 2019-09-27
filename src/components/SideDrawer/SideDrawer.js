import React from 'react';
import TokenService from '../../services/token-services';
import { Link } from 'react-router-dom';
import Context from '../../contexts/Context';
import history from '../../history';

import './sideDrawer.css'

class SideDrawer extends React.Component {

    static contextType = Context;

    handleLogout = () => {
        TokenService.clearAuthToken();
        this.context.setLoggedIn();
        this.context.handleBackDropClick();
        history.push('/');
    };

    handleLinkClicked = () => {
        this.context.handleBackDropClick();
    }

    renderLogoutLink() {
        return(
            <ul>
                <li>
                    <Link 
                        to='/myappointments' 
                        className='menu'
                        onClick = { this.handleLinkClicked }>
                        My Appointments
                    </Link>
                </li>
            
                <li>
                    <Link 
                        to='/setappointment' 
                        className='menu'
                        onClick = { this.handleLinkClicked }>
                        Set Appointment
                    </Link>
                </li>

                <li>
                    <Link 
                        to='/'
                        className='menu'
                        onClick={ this.handleLogout }>
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
                        className='menu'
                        onClick = { this.handleLinkClicked }>
                        Login
                    </Link>
                </li>
            
                <li>
                    <Link 
                        to='/createaccount'
                        className='menu'
                        onClick = { this.handleLinkClicked }>
                        Create Account
                    </Link>
                </li>

            </ul>
        )
    }
    
    

    render() {

        return (
            <nav className = { this.context.drawerClasses }>
                <div className='sidebar__navigation-items'>
                    {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </div>
            </nav>
        )
    }
}

export default SideDrawer;