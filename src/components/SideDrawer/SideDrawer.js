import React from 'react';
import TokenService from '../../services/token-services';
import { Link } from 'react-router-dom';
import Context from '../../contexts/Context';
import history from '../../history';

import './sideDrawer.css'

class SideDrawer extends React.Component {

    static contextType = Context;

    handleLogout = e => {
        TokenService.clearAuthToken();
        this.context.setLoggedIn();
        history.push('/');
        // this.context.handleDrawerToggleClick(e);
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