import React from 'react';

//import css
import './header.css';


class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <header>
                    <h1><a href='/'>Jolly Lube</a></h1>
                </header>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/myappointments/123'>My Appointments</a></li>
                        <li><a href='/setappointment'>Set Appointment</a></li>
                        <li><a href='/login'>Login</a></li>
                        <li><a href='/createaccount'>Create Account</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;

